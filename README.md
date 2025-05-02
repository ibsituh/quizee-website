# Quizee Website  
#### An interactive multiple-choice quiz web app, May 2025  
#### By **Ibsituh**

## Description
**Quizee Website** is a web-based quiz application that presents users with multiple-choice questions in a simple and clean interface. Users can click on the correct answers, get feedback, and view their total score as they progress.

This app can be used as an educational tool or practice project for learners exploring frontend development and client-side logic handling.

You can view the live site here: [https://ibsituh.github.io/quizee-website/](https://ibsituh.github.io/quizee-website/)

## Setup/Installation Requirements

To run this project locally:

1. **Clone this repository**
   ```bash
   git clone https://github.com/ibsituh/quizee-website.git
   cd quizee-website

2. **File Structure**  
Ensure your project contains the following files:
- `index.html`  
- `index.js`   
-  `style.css`

3. **Start a Local Server**  
Since the app imports a local JSON file as a module, you must run it through a local server.  
You can use VS Code with the Live Server extension, or run a server using Python:

4. **Open in Browser**  
Open `https://github.com/ibsituh/quizee-website/settings/pages` in your browser.

## Known Bugs
- Buttons do not auto-disable if the user clicks multiple answers unless handled manually.
- Questions repeat if "Next" is clicked too quickly (edge case).
- No persistent score storage — score is reset on reload.

**Workaround:** Use proper timing or debounce interactions if modifying logic.

## Technologies Used
- HTML5
- CSS3
- JavaScript

## Support and contact details
If you encounter any issues, have suggestions, or want to contribute:
- Email: ibseali258@gmail.com
- GitHub: [@Ibsituh](https://github.com/Ibsituh)

Feel free to fork and improve the project!

### License
*MIT License*  
Copyright (c) 2025  
**Ibsituh**
