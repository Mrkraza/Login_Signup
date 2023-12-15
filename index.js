check.onclick = togglePassword;
        function togglePassword() {
            if(check.checked) pass.type = "text";
            else pass.type = "password";
        }
checkr.onclick = togglePasswordR;
        function togglePasswordR() {
            if(checkr.checked) passr.type = "text";
            else passr.type = "password";
        }