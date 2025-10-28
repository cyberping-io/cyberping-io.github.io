# CyberPing Landing Page - Deployment Guide

## Prerequisites

- A server running Ubuntu/Debian or similar Linux distribution
- Root or sudo access
- Domain name pointed to your server's IP address (cyberping.io)

## Step 1: Install Nginx

```bash
sudo apt update
sudo apt install nginx -y
```

## Step 2: Install SSL Certificate (Let's Encrypt)

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Obtain SSL certificate
sudo certbot --nginx -d cyberping.io -d www.cyberping.io
```

## Step 3: Deploy Website Files

```bash
# Create web directory
sudo mkdir -p /var/www/cyberping.io

# Copy files to the web directory (run from your project root)
sudo cp index.html /var/www/cyberping.io/
sudo cp app.js /var/www/cyberping.io/
sudo cp styles.css /var/www/cyberping.io/

# Set proper permissions
sudo chown -R www-data:www-data /var/www/cyberping.io
sudo chmod -R 755 /var/www/cyberping.io
```

## Step 4: Configure Nginx

```bash
# Copy nginx configuration
sudo cp nginx.conf /etc/nginx/sites-available/cyberping.io

# Create symbolic link to enable site
sudo ln -s /etc/nginx/sites-available/cyberping.io /etc/nginx/sites-enabled/

# Remove default site (optional)
sudo rm /etc/nginx/sites-enabled/default

# Test nginx configuration
sudo nginx -t

# Reload nginx
sudo systemctl reload nginx
```

## Step 5: Enable Nginx on Boot

```bash
sudo systemctl enable nginx
sudo systemctl status nginx
```

## Step 6: Configure Firewall (if using UFW)

```bash
sudo ufw allow 'Nginx Full'
sudo ufw allow OpenSSH
sudo ufw enable
```

## Alternative Deployment Methods

### Using Docker

Create a `Dockerfile`:

```dockerfile
FROM nginx:alpine
COPY index.html /usr/share/nginx/html/
COPY app.js /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY nginx-docker.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Build and run:

```bash
docker build -t cyberping-landing .
docker run -d -p 80:80 -p 443:443 cyberping-landing
```

### Using GitHub Actions for CI/CD

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Server

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Deploy to server
      uses: appleboy/scp-action@master
      with:
        host: ${{ secrets.HOST }}
        username: ${{ secrets.USERNAME }}
        key: ${{ secrets.SSH_KEY }}
        source: "index.html,app.js,styles.css"
        target: "/var/www/cyberping.io"
```

## Monitoring and Maintenance

### Check Nginx Logs

```bash
# Access logs
sudo tail -f /var/log/nginx/cyberping.io-access.log

# Error logs
sudo tail -f /var/log/nginx/cyberping.io-error.log
```

### Renew SSL Certificate

Certbot auto-renews certificates. To test renewal:

```bash
sudo certbot renew --dry-run
```

### Update Website

```bash
# Copy updated files
sudo cp index.html app.js styles.css /var/www/cyberping.io/

# Clear nginx cache (if configured)
sudo systemctl reload nginx
```

## Performance Optimization

1. **Enable HTTP/2**: Already configured in nginx.conf
2. **Gzip Compression**: Already enabled
3. **Browser Caching**: Static assets cached for 1 year
4. **CDN Integration**: Consider using Cloudflare for additional caching and DDoS protection

## Troubleshooting

### Website not loading
```bash
# Check nginx status
sudo systemctl status nginx

# Check configuration
sudo nginx -t

# Restart nginx
sudo systemctl restart nginx
```

### SSL Certificate Issues
```bash
# Check certificate expiry
sudo certbot certificates

# Force renew
sudo certbot renew --force-renewal
```

### Permission Issues
```bash
# Fix permissions
sudo chown -R www-data:www-data /var/www/cyberping.io
sudo chmod -R 755 /var/www/cyberping.io
```

## Security Recommendations

1. Keep nginx and system packages updated
2. Use strong SSL/TLS configuration (already configured)
3. Implement rate limiting for API endpoints if needed
4. Regular security audits
5. Monitor logs for suspicious activity
6. Use fail2ban to prevent brute force attacks

## Additional Resources

- [Nginx Documentation](https://nginx.org/en/docs/)
- [Let's Encrypt Documentation](https://letsencrypt.org/docs/)
- [Mozilla SSL Configuration Generator](https://ssl-config.mozilla.org/)
