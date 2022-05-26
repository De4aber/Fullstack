pipeline {
    agent any

    triggers {
        pollSCM "*/5 * * * *"
    }

    tools {nodejs "NodeJS"}

    stages {
	    stage('Building') {
            steps{
                sh "echo '[Frontend] Building...'"
                sh "npm install"
                sh "npm run build"
            }
            post {
                success {
                    sh "echo 'Frontend built successfully'"
                }
            }
        }
        stage("Reset containers"){
            steps{
                sh "docker compose down ."
            }
        }
        stage("Deploy containers") {
            steps {
                sh "docker compose up -d --build"
            }
        }
    }
}