import { useEffect } from "react";

function DropdownHandler() {
  useEffect(() => {
    function setupDropdown(toggleId, dropdownId) {
      const toggle = document.getElementById(toggleId);
      const dropdown = document.getElementById(dropdownId);
      let isOpen = false;

      if (!toggle || !dropdown) return;

      toggle.addEventListener("click", function (event) {
        event.stopPropagation();
        if (!isOpen) {
          dropdown.classList.remove("fade-out");
          dropdown.classList.add("show");
          isOpen = true;
        } else {
          dropdown.classList.add("fade-out");
          setTimeout(() => {
            dropdown.classList.remove("show", "fade-out");
            isOpen = false;
          }, 500);
        }
      });

      document.addEventListener("click", function (event) {
        if (
          isOpen &&
          !dropdown.contains(event.target) &&
          !toggle.contains(event.target)
        ) {
          dropdown.classList.add("fade-out");
          setTimeout(() => {
            dropdown.classList.remove("show", "fade-out");
            isOpen = false;
          }, 500);
        }
      });
    }

    // Call for both dropdowns
    setupDropdown("profileToggleDesktop", "profileDropdownDesktop");
    setupDropdown("profileToggleMobile", "profileDropdownMobile");
  }, []);

  return null; // 👈 UI nahi hai, sirf logic hai
}

export default DropdownHandler;
