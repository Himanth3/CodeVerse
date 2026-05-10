import { useEffect, useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function Profile() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [newUsername, setNewUsername] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await api.get("profile/");
                setUser(response.data);
            } catch (err) {
                setError(" Please login.");
                console.error(err);
                if (err.response && err.response.status === 401) {
                    navigate("/login");
                }
            }
        };

        fetchProfile();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        navigate("/login");
    };

    const handleUpdate = async () => {
        try {
            const response = await api.patch("profile/", { username: newUsername });
            setUser(response.data);
            setIsEditing(false);
            setError(null);
        } catch (err) {
            setError("Failed to update username. It might be taken.");
            console.error(err);
        }
    };

    const startEditing = () => {
        setNewUsername(user.username);
        setIsEditing(true);
    };

    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
            try {
                await api.delete("profile/");
                localStorage.removeItem("access");
                localStorage.removeItem("refresh");
                alert("Account deleted successfully.");
                navigate("/");
            } catch (err) {
                setError("Failed to delete account.");
                console.error(err);
            }
        }
    };

    if (error) return <div className="auth-container"><div className="error-message">{error}</div></div>;
    if (!user) return <div className="auth-container"><h2 style={{ color: 'white' }}>Loading...</h2></div>;

    // Get first letter of username for avatar
    const initial = user.username ? user.username[0].toUpperCase() : 'U';

    return (
        <div className="auth-container">
            <div className="auth-card">
                <div className="profile-avatar">
                    {initial}
                </div>
                <h2>My Profile</h2>

                <div className="profile-details">
                    <div className="profile-item">
                        <span>User ID</span>
                        {isEditing ? (
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <input
                                    type="text"
                                    value={newUsername}
                                    onChange={(e) => setNewUsername(e.target.value)}
                                    style={{ padding: '5px', borderRadius: '4px', border: '1px solid #555', background: '#333', color: 'white' }}
                                />
                                <button onClick={handleUpdate} style={{ padding: '5px 10px', background: '#646cff', border: 'none', borderRadius: '4px', color: 'white', cursor: 'pointer' }}>Save</button>
                                <button onClick={() => setIsEditing(false)} style={{ padding: '5px 10px', background: '#555', border: 'none', borderRadius: '4px', color: 'white', cursor: 'pointer' }}>X</button>
                            </div>
                        ) : (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span>{user.username}</span>
                                <button onClick={startEditing} style={{ background: 'transparent', border: 'none', color: '#646cff', cursor: 'pointer', fontSize: '0.8rem' }}>Edit</button>
                            </div>
                        )}
                    </div>
                    <div className="profile-item">
                        <span>Email</span>
                        <span>{user.email}</span>
                    </div>
                </div>

                <button onClick={handleLogout} className="auth-button" style={{ background: '#555', marginTop: '2rem' }}>
                    Logout
                </button>
                <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                    <button onClick={handleDelete} style={{ background: 'transparent', border: 'none', color: '#ff4d4d', cursor: 'pointer', fontSize: '0.9rem', textDecoration: 'underline' }}>
                        Delete Function account
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Profile;
