pipeline {
    agent any

    environment {
        IMAGE_NAME = "vinaybt/my-node-app"
        DOCKER_TAG = "latest"
    }

    stages {
        stage('Clone') {
            steps {
                echo 'Cloning the repository...'
                // Jenkins automatically checks out the code from the connected Git repo
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing npm dependencies...'
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running unit tests...'
                sh 'npm test -- --detectOpenHandles'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build -t $IMAGE_NAME:$DOCKER_TAG .'
            }
        }

        // Optional: Push to Docker Hub
        /*
        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh "echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin"
                    sh "docker push $IMAGE_NAME:$DOCKER_TAG"
                }
            }
        }
        */

        stage('Run Container') {
            steps {
                echo 'Running Docker container...'
                sh 'docker run -d -p 3000:3000 $IMAGE_NAME:$DOCKER_TAG'
            }
        }
    }
}
