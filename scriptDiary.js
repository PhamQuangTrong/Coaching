    // JavaScript cho lịch và chức năng thêm sự kiện

    // Lấy ngày hiện tại
    var currentDate = new Date();

    // Hiển thị lịch cho tháng hiện tại
    function showCalendar(year, month) {
      var firstDay = new Date(year, month).getDay();
      var daysInMonth = new Date(year, month + 1, 0).getDate();

      var calendarHTML = '<table>';
      calendarHTML += '<caption id="month-label">' + getMonthName(month) + ' ' + year + '</caption>';
      calendarHTML += '<tr><th>Sunday</th><th>Monday</th><th>Tuesday</th><th>Wednesday</th><th>Thursday</th><th>Friday</th><th>Saturday</th></tr>';

      var date = 1;
      for (var row = 0; row < 6; row++) {
        calendarHTML += '<tr>';

        for (var col = 0; col < 7; col++) {
          if (row === 0 && col < firstDay) {
            calendarHTML += '<td></td>';
          }
          else if (date > daysInMonth) {
            break;
          }
          else {
            calendarHTML += '<td data-date="' + year + '-' + (month + 1) + '-' + date + '">' + date + '</td>';
            date++;
          }
        }

        calendarHTML += '</tr>';
      }
      calendarHTML += '</table>';

      document.getElementById('calendar').innerHTML = calendarHTML;

      highlightSelectedDate(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
      bindEvents();
    }

    // Lấy tên của tháng
    function getMonthName(month) {
      var monthNames = ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6', 'Month 7', 'Month 8', 'Month 9', 'Month 10', 'Month 11', 'Month 12'];
      return monthNames[month];
    }

    // Tạo sự kiện mới
    function createEvent() {
      var eventTitle = document.getElementById('event-title').value;
      var eventDescription = document.getElementById('event-description').value;
      var eventDate = document.getElementById('event-date').value;

      var eventHTML = '<div>';
      eventHTML += '<h3>' + eventTitle + '</h3>';
      eventHTML += '<p>' + eventDescription + '</p>';
      eventHTML += '<p>' + eventDate + '</p>';
      eventHTML += '</div>';

      document.getElementById('calendar').insertAdjacentHTML('beforeend', eventHTML);
    }

    // Đánh dấu ngày hiện tại
    function highlightSelectedDate(year, month, date) {
      var selectedDate = document.querySelector('[data-date="' + year + '-' + (month + 1) + '-' + date + '"]');
      if (selectedDate) {
        selectedDate.classList.add('selected');
      }
    }

    // Gắn các sự kiện
    function bindEvents() {
      var dateCells = document.getElementsByTagName('td');
      for (var i = 0; i < dateCells.length; i++) {
        dateCells[i].addEventListener('click', function() {
          var selectedDate = this.dataset.date.split('-');
          highlightSelectedDate(parseInt(selectedDate[0]), parseInt(selectedDate[1]) - 1, parseInt(selectedDate[2]));
        });
      }

      var eventForm = document.getElementById('event-form');
      eventForm.addEventListener('submit', function(event) {
        event.preventDefault();
        createEvent();
      });
    }

    showCalendar(currentDate.getFullYear(), currentDate.getMonth());