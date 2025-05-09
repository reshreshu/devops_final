pipeline {
    agent any

    environment {
        PORT = '3000'
    }

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

        stage('Run Script') {
            steps {
                // Start server in background and store its PID
                sh 'PORT=$PORT node index.js'
                sh 'sleep 2' // Give server time to start
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
    }

    post {
        always {
            // Kill the background server if it's running
            sh '''
                if [ -f server.pid ]; then
                    kill $(cat server.pid) || true
                    rm server.pid
                fi
            '''
        }
        success {
            echo '✅ Tests ran successfully.'
        }
        failure {
            echo '❌ Tests failed. Check logs.'
        }
    }
}
