pipeline {
    agent any

    stages {
        stage('Clone Code') {
            steps {
                git 'https://github.com/your-username/node-ci-project.git'
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
