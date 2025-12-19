export default function inputDates() {
  const inputs = document.querySelectorAll(".input._date");

  if (inputs.length) {
    inputs.forEach((input) => {
      const datepicker = new AirDatepicker(input, {
        isMobile: window.matchMedia("(max-width:992px)").matches,
      });
    });
  }
}
