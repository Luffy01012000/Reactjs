pipline{
    agent any
    stages{
    stage('Clone code'){
        steps{
        echo "Cloning code.."
        git url:"https://github.com/Luffy01012000/Reactjs",branch: "prod"
        }
    }
    stage('Build code'){
        steps{
        echo "Building code.."
        sh: "cd Reactjs"
        sh: "npm i"
        sh: "npm run build"
        }
    }
    stage('Push img to dockerhub'){
        steps{
        echo "Pushing img.."
        // withCredentials([usernamePassword(credentialsId:"dockerhub",usernameVariable:"dockerHubUser",passwordVariable:"dockerHubPass")]){
        // sh "docker tag appname ${env.dockerHubUser}/appname:latest"
        // sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPass}"
        // sh "docker push ${env.dockerHubUser}/appname:latest"
        // }
        
        }
    }
    stage('Deploy container'){
        steps{
        echo "Deploying container.."
        }
    }
    }
}