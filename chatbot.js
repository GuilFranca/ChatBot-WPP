// leitor de qr code
const qrcode = require('qrcode-terminal');
const { Client, Buttons, List, MessageMedia } = require('whatsapp-web.js'); // Mudança Buttons
const client = new Client();
// serviço de leitura do qr code
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
// apos isso ele diz que foi tudo certo
client.on('ready', () => {
    console.log('Tudo certo! WhatsApp conectado.');
});
// E inicializa tudo 
client.initialize();

const delay = ms => new Promise(res => setTimeout(res, ms)); // Função que usamos para criar o delay entre uma ação e outra

// Funil

client.on('message', async msg => {

    if (msg.body.match(/(menu|Menu|dia|tarde|noite|oi|Oi|Olá|olá|ola|Ola)/i) && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from,'Olá! '+ name.split(" ")[0] + ' Sou o assistente virtual da Solução Balanças. Como posso ajudá-lo hoje? Por favor, digite uma das opções abaixo:\n\n1 - Produtos\n2 - Assistência Técnica\n3 - Outras perguntas'); //Primeira mensagem de texto
        await delay(3000); //delay de 3 segundos
    
        
    }




    if (msg.body !== null && msg.body === '1' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); //Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Confira nossos produtos na nossa vitrine online: \nhttps://www.solucaobalancas.com.br\n\nCaso não encontre o produto que queira comprar, entre em contato com este número para confirmar: \n+55 61 9589-9265');
    }

    if (msg.body !== null && msg.body === '2' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Consertamos: \n-Balanças \n-Embaladoras \n-Fatiadores \n-liquidificares \n-Moedores \n-Processadores \n-Raladores \n-Seladooras \n-Serras fitas\n\nAssitência técnica autorizada: \n-Arbel \n-Elgin \n-Gural \n-Skymsen \n-Toledo \n-Urano \n-Welmy');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Link para vitrine online: \nhttps://www.solucaobalancas.com.br');
    }

    if (msg.body !== null && msg.body === '3' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Entre em contato conosco por este número para outros assuntos: +55 61 9589-9265');
        
        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Link para vitrine online: \nhttps://www.solucaobalancas.com.br');

    }








});