export const courses = [
    {
        id: 'python-basic',
        title: 'Basic Python',
        tagline: 'Start your coding journey with Python fundamentals!',
        image: '/images/python-basic.png',
        description: 'Learn variables, loops, conditions, and functions — perfect for beginners.',
        topics: [
            '🧮 Introduction to Python',
            '🔢 Variables and Data Types',
            '🔁 Loops and Conditional Statements',
            '📦 Functions and Modules',
            '📚 Lists, Tuples, Dictionaries',
            '📄 File Handling Basics'
        ],
        codeExample: `# This is your first Python code
print("Hello, Python World! 🐍")

# Simple variable and loop
name = "Himanth"
for i in range(3):
    print("Welcome,", name)`
    },
    {
        id: 'python-oops',
        title: 'OOPs with Python',
        tagline: 'Learn Object-Oriented Programming in Python – a powerful coding paradigm!',
        image: '/images/python-oops.png',
        description: 'Understand classes, objects, inheritance, polymorphism, and more!',
        topics: [
            '🔹 What is OOP?',
            '🧱 Classes and Objects',
            '🔄 Inheritance',
            '🔐 Encapsulation & Abstraction',
            '🧠 Polymorphism',
            '🛠️ Real-world OOP Projects'
        ],
        codeExample: `class Car:
    def __init__(self, brand):
        self.brand = brand

    def drive(self):
        print(f"Driving a {self.brand} car")

my_car = Car("Tesla")
my_car.drive()`
    },
    {
        id: 'python-flask',
        title: 'Flask Web Dev',
        tagline: 'Build powerful web apps with Python & Flask!',
        image: '/images/flask.png',
        description: 'Build lightweight web apps using Flask — fast and beginner-friendly.',
        topics: [
            '🌐 Introduction to Flask',
            '🛠️ Setting up your Flask Project',
            '🧭 Routing and Templates',
            '📄 Forms and Request Handling',
            '💾 Connecting to Databases',
            '🔐 Authentication and Deployment'
        ],
        codeExample: `from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "Hello from Flask! 🔥"

if __name__ == '__main__':
    app.run(debug=True)`
    },
    {
        id: 'python-django',
        title: 'Django Framework',
        tagline: 'Level up with Django – Python’s most powerful web framework!',
        image: '/images/Django.png',
        description: 'Master full-stack development with Django’s powerful ecosystem.',
        topics: [
            '⚙️ Introduction to Django',
            '🗂️ Project and App Structure',
            '🌐 URL Routing and Views',
            '🧠 Templates and Static Files',
            '🛢️ Models and Database Integration',
            '🔐 Authentication & Admin Panel'
        ],
        codeExample: `# mysite/views.py
from django.http import HttpResponse

def home(request):
    return HttpResponse("Welcome to Django! ⚙️")`
    },
    {
        id: 'python-dsa',
        title: 'DSA with Python',
        tagline: 'Crack coding interviews by mastering Data Structures and Algorithms!',
        image: '/images/DSA.png',
        description: 'Crack coding interviews by mastering Data Structures & Algorithms in Python.',
        topics: [
            '📊 Arrays and Strings',
            '🔁 Recursion and Backtracking',
            '🌳 Linked Lists, Trees, and Graphs',
            '🗃️ Stacks and Queues',
            '🔍 Searching and Sorting',
            '⚙️ Time and Space Complexity'
        ],
        codeExample: `# Binary Search in Python

def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1

print(binary_search([1, 2, 3, 4, 5], 4))  # Output: 3`
    }
];
