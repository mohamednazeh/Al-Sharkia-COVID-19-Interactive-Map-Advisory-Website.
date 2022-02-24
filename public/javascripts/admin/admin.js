// INTERFACEs
const dashboardSettings = document.querySelector(".dashboard-settings");
const openSettings = document.getElementById("open-settings");
const closeSettings = document.getElementById("close-settings");
const dashboardCnt = document.querySelector(".dashboard-cnt");
const settingToolsCntr = document.querySelector(".settings-tools");
const settingTools = settingToolsCntr.querySelectorAll(".tool_name");
// console.log(settingTools);


// DECLARATIONs





// # Handle the hover of settings arrows..
// let open = false;
const handleSettingsArrows = ( open = false  ) => {
  // Settings is open
  if (open) {
    // )+1 Display the close of arrow
    openSettings.style.display = "block";
    closeSettings.style.display = "none";
    // )+2  Close the settings //width:  1%
    dashboardSettings.style.width = "1%";
    // dashboardCnt.getElementsByClassName("settings-tools")[0].style.display = "none";
    document.querySelector(".dashboard-settings .settings-tools").style.display = "none";
    console.log(document.querySelector(".dashboard-settings .settings-tools"));
    dashboardCnt.style.width ="98%";
  }else {
    // Display the open arrow
    closeSettings.style.display = "block";
    openSettings.style.display = "none";
    // Open the settings //width: 18%
    dashboardSettings.style.width = "18%";    
    document.querySelector(".dashboard-settings .settings-tools").style.display = "block";
    console.log(document.querySelector(".dashboard-setting"));
    dashboardCnt.style.width ="80%";
  }
}

// Handle admin settings tools
settingTools.forEach( (ele) => {
  ele.addEventListener('click', (vnt) => {
    if ( vnt.target.nextElementSibling !== null ) {
      if (!vnt.target.classList.contains("open")) {
       
        vnt.target.nextElementSibling.style.minHeight = "5px";
        vnt.target.nextElementSibling.style.display = "block";
        vnt.target.classList.add("open")
      }else {
        vnt.target.nextElementSibling.style.minHeight = "0px";
        vnt.target.nextElementSibling.style.display = "none";
        vnt.target.classList.remove("open")
      }      
    }
  })
})
