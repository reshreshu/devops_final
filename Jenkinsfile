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

        stage('Run Script') {
            steps {
                // This runs index.js and shows the sum in Console Output
                sh 'node index.js'
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
            echo '✅ Pipeline successful! All tests passed and everything is good.'
            // Add more post-success actions here, such as notifications
        }

        failure {
            echo '❌ Tests failed. Check logs for more details.'
            // You can add email notifications or Slack notifications here for failure
        }

        always {
            echo '⚙️ Cleaning up resources and performing any necessary tasks.'
            // This block will always run, regardless of success or failure
        }
    }
}
