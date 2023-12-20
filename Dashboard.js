function GetDashboardWidgetByDashboardId(id){
console.log("salam : "+ id)
    $.ajax(
      {
        type: "Get",
        contentType: "application/json; charset=utf-8",
        url: "http://localhost:5142/Dashboard/GetDashboardWidget?dashboardId=" + id,
        dataType: "json",
        success: function(response) {
          dashboardWidget = response[0];

          dashboardWidgetId = document.getElementById("dashboardWidget-id");
          dashboardWidgetId.innerHTML = dashboardWidget.id;

          dashboardWidgetDashboardId = document.getElementById("dashboardWidget-dashboardId");
          dashboardWidgetDashboardId.innerHTML = dashboardWidget.dashboardId;
          
          dashboardWidgetWidgetId = document.getElementById("dashboardWidget-widgetId");
          dashboardWidgetWidgetId.innerHTML = dashboardWidget.WidgetId;

          dashboardWidgetDashboardId = document.getElementById("dashboardWidget-name");
          dashboardWidgetDashboardId.innerHTML = dashboardWidgetName.dashboardId;
  
          alert(document.getElementById("dashboardWidget-id").innerText);
        },
        error: function(response) {
          console.log(response)
        },
      });
    }

    GetDashboardWidgetByDashboardId(window.location.href.substring(window.location.href.indexOf('=')+1));

    function GetWidgetList(){
        $.ajax(
            {
              type: "Get",
              contentType: "application/json; charset=utf-8",
              url: "http://localhost:5142/Dashboard/GetWidgets",
              dataType: "json",
              success: function(response) {
                dashboard = response;
                
                widgetsContainer = document.getElementById("widget-container")
                widgetsContainer.innerHTML = "";
                // dashboardId = document.getElementById("dashboard-id");
                // dashboardId.innerHTML = dashboard.id;
                // dashboardName = document.getElementById("dashboard-name");
                // dashboardName.innerHTML = dashboard.name;
                // <input value="load dashboardWidget" type="button" onclick="GetDashboardWidgetByDashboardId()"/> 
        
                for (let i = 0, len = response.length; i < len; i++) {
                    widgetsContainer.innerHTML +='<input value="load dashboardWidget" type="button" onclick="GetWidgetById('+response[i].id+')"/> ';
                }
                
              },
              error: function(response) {
                console.log(response)
              },
            });
        }

        function GetWidgetById(id){
            console.log("salam : "+ id)
                $.ajax(
                  {
                    type: "Get",
                    contentType: "application/json; charset=utf-8",
                    url: "http://localhost:5142/Dashboard/GetWidget?Id=" + id,
                    dataType: "json",
                    success: function(response) {
                      dashboardWidget = response[0];
            
                      dashboardWidgetId = document.getElementById("dashboardWidget-id");
                      dashboardWidgetId.innerHTML = dashboardWidget.id;
            
                      dashboardWidgetDashboardId = document.getElementById("dashboardWidget-dashboardId");
                      dashboardWidgetDashboardId.innerHTML = dashboardWidget.dashboardId;
                      
                      dashboardWidgetWidgetId = document.getElementById("dashboardWidget-widgetId");
                      dashboardWidgetWidgetId.innerHTML = dashboardWidget.WidgetId;
            
                      dashboardWidgetDashboardId = document.getElementById("dashboardWidget-name");
                      dashboardWidgetDashboardId.innerHTML = dashboardWidgetName.dashboardId;
              
                      alert(document.getElementById("dashboardWidget-id").innerText);
                    },
                    error: function(response) {
                      console.log(response)
                    },
                  });
                }

