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
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build') {
            steps {
                echo 'Build stage - optional for Node.js'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying app...'
            }
        }
    }
}