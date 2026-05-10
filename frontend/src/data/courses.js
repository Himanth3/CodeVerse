export const courses = [
    {
        id: 'java-programming',
        title: 'Core Java Programming',
        tagline: 'Start your journey with Java — robust and platform-independent!',
        image: '/images/java-programming.png',
        description: 'Learn variables, loops, object-oriented concepts, and more in Java.',
        topics: [
            '☕ Introduction to Java',
            '🔢 Data Types & Variables',
            '🧱 Object-Oriented Programming',
            '📦 Packages & Interfaces',
            '🚨 Exception Handling',
            '🧵 Multithreading Basics'
        ],
        codeExample: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, CodeVerse! 🌌");
        
        for(int i = 0; i < 3; i++) {
            System.out.println("Exploring the universe...");
        }
    }
}`
    },
    {
        id: 'java-dsa',
        title: 'Java + DSA',
        tagline: 'Master Data Structures & Algorithms to crack top tech interviews!',
        image: '/images/JAVA+DSA.png',
        description: 'Deep dive into Arrays, Linked Lists, Trees, Graphs, and DP using Java.',
        topics: [
            '📊 Arrays and Strings',
            '🔁 Recursion and Backtracking',
            '🌳 Linked Lists, Trees, and Graphs',
            '🗃️ Stacks and Queues',
            '🔍 Searching and Sorting',
            '⚙️ Dynamic Programming'
        ],
        codeExample: `// Binary Search in Java
public int binarySearch(int[] arr, int target) {
    int left = 0, right = arr.length - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}`
    },
    {
        id: 'git-github',
        title: 'Git & GitHub Mastery',
        tagline: 'Version control like a pro.',
        image: '/images/gitgithub.png',
        description: 'Learn the industry standard for version control and collaborative coding.',
        topics: [
            '📂 Introduction to Version Control',
            '⚡ Basic Git Commands',
            '🔀 Branching & Merging',
            '☁️ Remote Repositories (GitHub)',
            '🚨 Resolving Merge Conflicts',
            '🤝 Pull Requests & Open Source'
        ],
        codeExample: `# Initialize a new repository
git init

# Add all files to staging
git add .

# Commit changes
git commit -m "feat: initial commit from CodeVerse"

# Push to remote
git push -u origin main`
    },
    {
        id: 'rest-api',
        title: 'Building REST APIs',
        tagline: 'Connect the world with robust backend services.',
        image: '/images/RESTAPI.png',
        description: 'Understand the core principles of REST, HTTP methods, and API design.',
        topics: [
            '🌐 What is a REST API?',
            '📡 HTTP Methods (GET, POST, PUT, DELETE)',
            '🔐 Authentication & Authorization',
            '📦 JSON Data Handling',
            '🚀 Building APIs with Spring Boot',
            '🧪 Testing with Postman/cURL'
        ],
        codeExample: `// Spring Boot REST Controller
@RestController
@RequestMapping("/api/planets")
public class PlanetController {
    
    @GetMapping("/")
    public ResponseEntity<List<Planet>> getPlanets() {
        return ResponseEntity.ok(planetService.getAll());
    }
}`
    },
    {
        id: 'python-basic',
        title: 'Basic Python',
        tagline: 'Learn the easiest and most popular language today.',
        image: '/images/python-basic.png',
        description: 'Start coding with Python fundamentals — variables, loops, functions.',
        topics: [
            '🧮 Introduction to Python',
            '🔢 Variables and Data Types',
            '🔁 Loops and Conditional Statements',
            '📦 Functions and Modules',
            '📚 Lists, Tuples, Dictionaries',
            '📄 File Handling Basics'
        ],
        codeExample: `# This is your first Python code
print("Hello, CodeVerse! 🌌")

name = "Explorer"
for i in range(3):
    print("Welcome,", name)`
    },
    {
        id: 'springboot-backend',
        title: 'Spring Boot Backend',
        tagline: 'Build enterprise-grade applications.',
        image: '/images/springboot.png',
        description: 'Create powerful, scalable, and secure backend systems with Spring Boot.',
        topics: [
            '🍃 Spring Core & Dependency Injection',
            '⚡ Spring Boot Auto-Configuration',
            '🗄️ Spring Data JPA & Hibernate',
            '🛡️ Spring Security & JWT',
            '☁️ Microservices Basics',
            '🚀 Deployment'
        ],
        codeExample: `@SpringBootApplication
public class CodeVerseApp {
    public static void main(String[] args) {
        SpringApplication.run(CodeVerseApp.class, args);
    }
}`
    }
];
