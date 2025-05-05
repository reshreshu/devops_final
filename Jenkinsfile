pipeline {
    agent any

    stages {
        stage('Clone Code') {
            steps {
                git branch: 'main', credentialsId: 'github-token', url: 'https://github.com/reshreshu/devops_final.git'
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

        stage('Run Addition Code') {
            steps {
                sh 'node index.js'
            }
        }
    }

    post {
        failure {
            echo '❌ Tests failed. Check logs.'
        }
    }
}
