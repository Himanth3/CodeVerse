package com.pycoder.backend.controller;

import com.pycoder.backend.model.User;
import com.pycoder.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api")
public class ProfileController {

    @Autowired
    private UserRepository userRepository;

    private User getCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentPrincipalName = authentication.getName();
        return userRepository.findByUsername(currentPrincipalName)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    @GetMapping("/profile/")
    public ResponseEntity<?> getProfile() {
        User user = getCurrentUser();
        return ResponseEntity.ok(Map.of(
                "id", user.getId(),
                "username", user.getUsername(),
                "email", user.getEmail()
        ));
    }

    @PatchMapping("/profile/")
    public ResponseEntity<?> updateProfile(@RequestBody Map<String, String> requestMap) {
        User user = getCurrentUser();
        String newUsername = requestMap.get("username");
        
        if (newUsername != null && !newUsername.equals(user.getUsername())) {
            if (userRepository.existsByUsername(newUsername)) {
                return ResponseEntity.badRequest().body(Map.of("detail", "Username is already taken."));
            }
            user.setUsername(newUsername);
            userRepository.save(user);
        }
        
        return ResponseEntity.ok(Map.of(
                "id", user.getId(),
                "username", user.getUsername(),
                "email", user.getEmail(),
                "message", "Profile updated successfully"
        ));
    }

    @DeleteMapping("/profile/")
    public ResponseEntity<?> deleteProfile() {
        User user = getCurrentUser();
        userRepository.delete(user);
        return ResponseEntity.ok(Map.of("message", "Profile deleted successfully"));
    }
}
