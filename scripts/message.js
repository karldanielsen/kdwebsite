$(document).ready(function() {
    $("#msgSubmit").click(function() {
        message();
    });
});

async function message() {
    var msg = $("#snsTestArea").val();
    const response = await fetch('https://b8j38l4m27.execute-api.us-east-1.amazonaws.com/basic/',
                                 {
                                     method: 'POST',
                                     mode: 'cors',
                                     cache: 'no-cache',
                                     body: {
                                         'message':msg
                                     }
                                 }
                                );
}
