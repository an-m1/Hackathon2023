// document.getElementById('progress_button').addEventListener('click',function(){
//     window.location.href= 'login.html';

// });

document.getElementById('progress_button').addEventListener('click', function(event){
    event.preventDefault(); // Prevent the default form submission if using a form
    
    // Get the value from the input field
    var studentName = document.getElementById('student_name').value;

    // Check if the entered name is "Michael Jackson"
    if (studentName.toLowerCase() === 'michael jackson') {
        // Redirect to the degree status page for Michael Jackson
        window.location.href = 'degree_status.html'; // Change 'degree_status.html' to the actual path
    } else {
        // Display an error message or handle the invalid name case
        alert('Invalid name. Please enter "Michael Jackson" to proceed.');
        // Optionally, you could clear the input field or perform other actions
    }
});
