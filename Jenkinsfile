pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Cloning repo...'
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                bat 'npm test'
            }
        }
        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                // Add deploy steps here
            }
        }
    }
}
