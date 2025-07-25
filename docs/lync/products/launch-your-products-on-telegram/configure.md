---
sidebar_label: "Configure Your Telegram Bot"
id: configure-your-telegram-bot
custom_edit_url: null
---

# Configure Your Telegram Bot

### Before deploying the product on Telegram, we need to create a bot from Telegram by using a bot called [BotFather](https://telegram.me/BotFather).

### Step 1: Sign in to Telegram Messenger

1. Navigate to [Telegram messenger](https://web.telegram.org/).
2. Sign in to Telegram app using your credentials.

### Step 2: Create a New Bot

1. If you did not have an existing bot, search for the [BotFather](https://telegram.me/BotFather) Telegram bot in your Telegram messenger app and choose the first bot.

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/PRODUCTS/telegram/conf/conf-telegram.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">BotFather Telegram Bots</span>
</div>
<br/>

2. Select the BotFather bot and click on the `START` button on the top right corner to start the BotFather bot. You will see a list of commands that you can use to interact with BotFather bot.

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/PRODUCTS/telegram/conf/conf-telegram-1.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Click on the START Button to Start the BotFather Bot</span>
</div>
<br/>

3. Click on the `/newbot` command to create a new bot. You will use this new bot to deploy and control your web app withing the Telegram's environment.

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/PRODUCTS/telegram/conf/conf-telegram-2.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Click on the Highlighted Command to Create a New Bot</span>
</div>
<br/>

### Step 3: Configure Your Bot

1. After clicking on the `/newbot` command, A message will be prompted by BotFather bot, asking you a name for your bot.
2. Choose a username of your choice to move forward.

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/PRODUCTS/telegram/conf/conf-telegram-3.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Choose a Unique Name for Your Bot</span>
</div>
<br/>

3. After choosing a name of your bot, you will get another message by BotFather, asking you for the username of your bot. The bot's username is a unique identifier that distinguishes it on the platform and must end with `Bot`.
4. Choose a username for your bot of your choice.

:::info

Keep in mind that the username of the bot should be unique, must end with the word "Bot", can be 5-32 characters long, and may contain letters, numbers, and underscores (\_).
::::

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/PRODUCTS/telegram/conf/conf-telegram-4.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Choose a Unique Username for Your Bot</span>
</div>
<br/>

### Step 4: Get the Access Token of Your Bot

1. After choosing a valid username of your bot, you will get a message by BotFather. This message is a confirmation that your bot is created successfully and contains the access token of your bot.

> NOTE -
>
> In Telegram bots, an access token is a unique key provided by **BotFather** when you create a bot. This token is essential for authenticating your bot and interacting with the Telegram Bot API. This token allows you to integrate the bot with your app or service.

<div className="flex flex-col items-center">
    <img className="w-[80%]" src="/img/PRODUCTS/telegram/conf/conf-telegram-5.png"/>
    <span className="font-bold text-[rgb(192,192,192)]">Access Token of your Bot</span>
</div>
<br/>

2. This access token will be required to deploy and control your web application using this bot in Telegram's environment. Keep this access token safe with you, it can be used by anyone to control your bot..
