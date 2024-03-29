const keywords = [
  "You may cancel your membership at any time by calling us",
  "With 1-year Care Subscription 10 days history",
  "You may cancel or renew your membership to the VIP Program or find out more information about your VIP Program subscription",
  "After 1 year, subscription auto renews with fee",
  "FLASH SALE | LIMITED TIME ONLY Shop Now",
  "In Stock only 3 left",
  "Hurry! Only 2 left in stock",
  "Hurry! Only 2 left",
  "Only 1 Item(s) left",
  "Subscribe & Save",
  "ONLY A FEW LEFT IN STOCK",
  "Want a special deal?",
  "Hurry, Limited Time Offer!",
  "Up to",
  "% off",
  "Hurry",
  "Help",
  "OFF",
  "Minimum",
  "Starting",
  "Deal of the day",
];

const keywordRegex = new RegExp(keywords.join("|"), "gi");
const matches = document.body.innerText.match(keywordRegex);

if (matches && matches.length > 0) {
  console.log("Detected keywords:", matches);

  matches.forEach(match => {
    const span = document.createElement('span');
    span.style.backgroundColor = '#10ff00';
    span.style.color = 'black';
    // span.style.border='0.005px solid red';
    span.style.fontWeight = 'bold';
    span.textContent = match;
    document.body.innerHTML = document.body.innerHTML.replace(
      new RegExp(match, 'g'),
      span.outerHTML
    );
  });

  // content.js sending a message
  chrome.runtime.sendMessage({ keywordCount: matches.length });
  console.log("Message sent from content script");
}
