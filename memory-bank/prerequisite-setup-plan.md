# Deployment Prerequisites Setup Plan

This document outlines the steps to set up the necessary prerequisites for deploying the QuantumHive website using the provided deployment plan.

## 1. Set up an EC2 Instance:

*   Log in to your AWS Management Console.
*   Navigate to the EC2 dashboard.
*   Launch a new instance, selecting an appropriate AMI (like Ubuntu Server).
*   Choose an instance type based on your needs (e.g., t2.micro for testing).
*   Configure security groups to allow inbound traffic on ports 22 (SSH), 80 (HTTP), and 443 (HTTPS).
*   Create or select a key pair and download the private key file (`.pem`). Keep this file secure.
*   Launch the instance.
*   Note the Public IP or Public DNS of your instance.

## 2. Connect GitHub Repository to EC2:

*   Connect to your EC2 instance via SSH using the downloaded `.pem` file and the instance's public IP/DNS.
    ```bash
    ssh -i /path/to/your-key.pem ubuntu@your-ec2-host
    ```
    (Replace `/path/to/your-key.pem` and `your-ec2-host` with your details. The default user is often `ubuntu` for Ubuntu AMIs).
*   Install Git on the EC2 instance if it's not already installed.
    ```bash
    sudo apt update
    sudo apt install git -y
    ```
*   Clone your GitHub repository to the EC2 instance.
    ```bash
    git clone https://github.com/quantumhiveinc/website.git
    ```
    (Using the repository URL you provided).

## 3. Configure GitHub Secrets:

*   Go to your GitHub repository on the web (`github.com/quantumhiveinc/website`).
*   Navigate to `Settings` > `Secrets and variables` > `Actions`.
*   Click `New repository secret`.
*   Add the following secrets:
    *   `EC2_SSH_KEY`: Paste the *entire* content of your downloaded `.pem` private key file here, including `-----BEGIN...` and `-----END...` lines.
    *   `EC2_HOST`: Enter the Public IP or Public DNS of your EC2 instance.
    *   `EC2_USER`: Enter the SSH username for your EC2 instance (e.g., `ubuntu`).

Once these steps are completed, the GitHub Actions workflow should be able to connect to your EC2 instance and deploy the application using Docker Compose.