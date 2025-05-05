pipeline {
    agent any

    stages {
        stage('Clone Code') {
            steps {
                git 'https://github.com/reshreshu/devops_final.git'
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
    }

    post {
        success {
            echo '✅ Tests ran successfully.'
        }
        failure {
            echo '❌ Tests failed. Check logs.'
        }
    }
}
