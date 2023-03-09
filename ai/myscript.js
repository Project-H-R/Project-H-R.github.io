function chat() {
    const url = 'https://api.openai.com/v1/engines/' + document.getElementById('model').value + '/completions';
    const api_key = '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';
    const prompt = document.getElementById('prompt').value;
    const temperature = 1;
    const max_tokens = 3750;
    document.getElementById('prompt').value = "";
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${{ secrets.API_KEY }}`
      },
      body: JSON.stringify({
        prompt,
        temperature,
        max_tokens
      })
    })
    .then(response => response.json())
    .then(data => {
      const responseElement = document.getElementById('response');
      const generatedText = data.choices[0].text.replace(/\n/g, '<br>');
      responseElement.innerHTML = generatedText;
    })
    .catch(error => console.error(error));
  }

  const promptInput = document.getElementById('prompt');
  promptInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      document.querySelector('button').click();
    }
  });
