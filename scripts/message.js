async function message() {
    var msg = $("#snsTextArea").val();
    const response = await fetch(`https://b8j38l4m27.execute-api.us-east-1.amazonaws.com/message`,
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
