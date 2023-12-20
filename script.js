load();
function load(){
  $.ajax(
    {
      type: "Get",
      contentType: "application/json; charset=utf-8",
      url: "http://localhost:5142/Dashboard/GetDashboard",
      dataType: "json",
      success: function(response) {
        dashboard = response;
        
        dashboardContainer = document.getElementById("dashboard-container")
        dashboardContainer.innerHTML = "";
        // dashboardId = document.getElementById("dashboard-id");
        // dashboardId.innerHTML = dashboard.id;
        // dashboardName = document.getElementById("dashboard-name");
        // dashboardName.innerHTML = dashboard.name;
        // <input value="load dashboardWidget" type="button" onclick="GetDashboardWidgetByDashboardId()"/> 

        for (let i = 0, len = response.length; i < len; i++) {
          dashboardContainer.innerHTML +='<input value="load dashboardWidget" type="button" onclick="GoToDashboardPage('+response[i].id+')"/> ';
        }
        
      },
      error: function(response) {
        console.log(response)
      },
    });
  }

  function GoToDashboardPage(id){
    window.location.replace("./Dashboard.html?id=" + id)
  }

  