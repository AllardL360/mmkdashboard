document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.plus').forEach(button => {
      button.addEventListener('click', function() {
        let quantityElement = this.previousElementSibling;
        let quantity = parseInt(quantityElement.textContent);
        quantityElement.textContent = quantity + 1;
      });
    });
  
    document.querySelectorAll('.minus').forEach(button => {
      button.addEventListener('click', function() {
        let quantityElement = this.nextElementSibling;
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 0) {
          quantityElement.textContent = quantity - 1;
        }
      });
    });
  
    document.getElementById("logout").addEventListener("click", function() {
      window.location.href = "index1.html";
    });
  });
  let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();

function createCalendar(year, month) {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const totalDays = new Date(year, month + 1, 0).getDate();
  const firstDayIndex = new Date(year, month, 1).getDay();
  
  const calendar = document.createElement('table');
  let html = '<tr>';
  
  // Create table headers
  daysOfWeek.forEach(day => {
    html += `<th>${day}</th>`;
  });
  html += '</tr>';

  // Fill in the days
  let dayCounter = 1;
  for (let i = 0; i < 6; i++) {
    html += '<tr>';
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDayIndex) {
        html += '<td></td>';
      } else if (dayCounter > totalDays) {
        html += '<td></td>';
      } else {
        html += `<td>${dayCounter}</td>`;
        dayCounter++;
      }
    }
    html += '</tr>';
  }
  
  calendar.innerHTML = html;
  return calendar;
}

function renderCalendar() {
  const calendarContainer = document.getElementById('calendar');
  calendarContainer.innerHTML = '';
  calendarContainer.appendChild(createCalendar(currentYear, currentMonth));

  document.getElementById('currentMonthYear').textContent = `${getMonthName(currentMonth)} ${currentYear}`;
}

function getMonthName(monthIndex) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return months[monthIndex];
}

function previousMonth() {
  if (currentMonth === 0) {
    currentMonth = 11;
    currentYear--;
  } else {
    currentMonth--;
  }
  renderCalendar();
}

function nextMonth() {
  if (currentMonth === 11) {
    currentMonth = 0;
    currentYear++;
  } else {
    currentMonth++;
  }
  renderCalendar();
}

renderCalendar();
// Dummy food data
const foods = [
    {
      name: 'Adobo',
      image: 'image/delicious-goulash-ready-dinner.jpg',
      description: 'consists of meat (often chicken or pork) marinated and cooked in a mixture of vinegar, soy sauce, garlic, bay leaves, and black peppercorns. '
    },
    {
      name: 'Silog',
      image: 'image/rice-omelet-sausages-with-seasonings-served-bowl-souse-nearby.jpg',
      description: ' garlic fried rice forming the base, topped with the fried egg, and accompanied by the protein of choice.'
    },
    {
      name: 'Torta',
      image: 'image/filipino-pork-torta-with-chili-maple-sauce-recipe-main-photo.jpg',
      description: 'grilled or roasted eggplants (talongs) that are then peeled, flattened, and dipped in beaten eggs before being fried until golden brown..'
    },
    {
      name: 'Lugaw',
      image: 'image/15086280444_0160b11df8_c.jpg',
      description: 'seasoned with garlic, ginger, salt, and sometimes a bit of fish sauce for extra flavor.'
    },
    {
      name: 'Lumpia',
      image: 'image/Lumpia-3.jpg',
      description: 'consists of thin wrappers filled with a savory mixture, typically containing finely chopped vegetables (such as cabbage, carrots, and bean sprouts), minced meat (often pork or chicken), and sometimes shrimp.'
    },
    {
      name: 'Barbeque',
      image: 'image/list-of-filipino-favorite-street-foods.jpg',
      description: 'involves grilling, smoking, or roasting meat (such as beef, pork, chicken, or fish) over an open flame or hot coals..'
    },
    {
      name: 'Kare-Kare',
      image: 'image/ngocvan-205903025952-What-is-kare-kare.jpg',
      description: 'rich and creamy peanut sauce. It typically features tender cuts of beef, oxtail, or tripe, along with a variety of vegetables such as eggplant, string beans, and banana blossoms.'
    },
    {
      name: 'Palabok',
      image: 'image/how-to-cook-pancit-palabok-1500x822.jpg',
      description: 'noodle dish that features thin rice noodles topped with a flavorful sauce made from shrimp, garlic, onions, and ground pork..'
    },
    {
        name: 'Kaldereta',
        image: 'image/Kaldereta-with-Peanut-Butter-Wide.jpg',
        description: 'combination of ingredients like tomato sauce, liver spread or liver paste, onions, garlic, and various spices such as bay leaves, paprika, and chili peppers.'
      },
  ];
  
  
  // Function to generate random food recommendation
  function generateFoodRecommendation() {
    const randomFood = foods[Math.floor(Math.random() * foods.length)];
    
    const foodRecommendation = document.getElementById('food-recommendation');
    foodRecommendation.innerHTML = `
      <div class="food-item">
        <img src="${randomFood.image}" alt="${randomFood.name}">
        <div class="food-details">
          <h3>${randomFood.name}</h3>
          <p>${randomFood.description}</p>
        </div>
      </div>
    `;
  }
  
  // Display initial recommendation
  generateFoodRecommendation();

 
  