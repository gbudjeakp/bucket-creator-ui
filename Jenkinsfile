pipeline {
    agent { 
        label 'docker-test-agent'
    }
    options {
        timestamps()
        buildDiscarder(logRotator(numToKeepStr: '10'))
    }
    triggers {
        githubPullRequest(
            triggerPhrase: 'merge', 
            onlyTriggerPhrase: true,
            useGitHubHooks: true 
        )
    }
    stages {
        stage('Test') {
            steps {
                echo "Testing Application.."
                script {
                    dir('./') {
                        echo 'Testing App'
                    }
                }
            }
        }
        stage('Build') {
            steps {
                echo "Building.."
                script {
                    dir('./') {
                        echo 'Building App'
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying to docker....'
                echo 'Deploy done'
            }
        }
    }
}
