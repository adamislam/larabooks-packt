import { defineStore } from "pinia";
import { ref, unref } from "vue";

export const useCategoryStore = defineStore('category', () => {
    const categories = ref([
        "All Products",
        "All Books",
        "Mobile",
        "Cross Platform Mobile Development",
        "Data",
        "Machine Learning",
        "Security",
        "Cybersecurity",
        "Penetration Testing",
        "Big Data",
        "Data Analysis",
        "Malware Analysis",
        "Databases",
        "Programming",
        "Programming Language",
        "Web Development",
        "Solution Architecture",
        "Scientific Computing",
        "Web Programming",
        "Data Structures and Algorithms",
        "All Videos",
        "Game Development",
        "Cross Platform Game Development",
        "Business & Other",
        "Business Management",
        "Front End Web Development",
        "Top Trends for 2020",
        "Top 20 eBooks",
        "Best Sellers",
        "Object Oriented Programming",
        "Cloud & Networking",
        "Network Security",
        "Containerization",
        "Cryptocurrency",
        "Software Architecture",
        "Natural Language Processing",
        "Design Patterns",
        "Full Stack Web Development",
        "Enterprise Resource Planning",
        "DevOps",
        "Application Development",
        "Responsive Web Development",
        "Top 20 Videos",
        "Business Intelligence",
        "System Administration",
        "High Performance Programming",
        "3D Game Development",
        "Cloud Computing",
        "Configuration Management",
        "SQL",
        "Game Scripting",
        "New eBooks & Videos",
        "Enterprise Mobility Management",
        "REST API",
        "Most Read Titles in 2019",
    ])

    const category = ref(unref(categories)[0])

    const changeCategory = (c = 'All Products') => {
        category.value = c
    }

    return {
        categories,
        category,
        changeCategory,
    }
})
