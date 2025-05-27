// Simple password strength and match validation
        document.getElementById('password').addEventListener('input', function(e) {
            const password = e.target.value;
            const strengthBar = document.getElementById('password-strength-bar');
            
            // Very basic strength calculation
            let strength = 0;
            if (password.length > 0) strength += 20;
            if (password.length >= 8) strength += 30;
            if (/[A-Z]/.test(password)) strength += 20;
            if (/[0-9]/.test(password)) strength += 20;
            if (/[^A-Za-z0-9]/.test(password)) strength += 10;
            
            strengthBar.style.width = strength + '%';
            
            if (strength < 50) {
                strengthBar.style.backgroundColor = '#dc3545';
            } else if (strength < 80) {
                strengthBar.style.backgroundColor = '#fd7e14';
            } else {
                strengthBar.style.backgroundColor = '#28a745';
            }
            
            // Check password match if confirm password has value
            const confirmPassword = document.getElementById('confirm-password').value;
            if (confirmPassword) {
                checkPasswordMatch();
            }
        });
        
        document.getElementById('confirm-password').addEventListener('input', checkPasswordMatch);
        
        function checkPasswordMatch() {
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            const feedback = document.getElementById('password-match-feedback');
            
            if (password && confirmPassword && password !== confirmPassword) {
                document.getElementById('confirm-password').classList.add('is-invalid');
            } else {
                document.getElementById('confirm-password').classList.remove('is-invalid');
            }
        }