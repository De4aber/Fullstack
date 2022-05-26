pipeline {
    agent any

    triggers {
        pollSCM "*/5 * * * *"
    }

    tools {nodejs "NodeJS"}

    stages {
	    stage('Building') {
            steps{
                sh "echo '[API] Building...'"
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
                sh "docker compose up -d --build"
            }
        }
    }
}