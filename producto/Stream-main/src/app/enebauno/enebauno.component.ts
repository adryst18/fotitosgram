import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { createAnimation } from '@ionic/core';

@Component({
  selector: 'app-eneba',
  templateUrl: './enebauno.component.html',
  styleUrls: ['./enebauno.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class EnebaComponent implements AfterViewInit {
  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.animateProfileIcon();
  }

  animateProfileIcon() {
    const profileIcon = document.querySelector('.profile-icon'); // Obtenemos el elemento

    if (profileIcon) { // Validamos que existe antes de animar
      const animation = createAnimation()
        .addElement(profileIcon) // Ya no habrá error porque sabemos que existe
        .duration(1000)
        .iterations(3)
        .keyframes([
          { offset: 0, transform: 'scale(1)', opacity: '1' },
          { offset: 0.5, transform: 'scale(1.2)', opacity: '0.8' },
          { offset: 1, transform: 'scale(1)', opacity: '1' }
        ]);

      animation.play();
    }
  }

  // Navegación a las diferentes páginas
  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToRegister() {
    this.router.navigate(['/registro']);
  }

  navigateToJoin() {
    this.router.navigate(['/join']);
  }

  navigateToLearnMore() {
    this.router.navigate(['/learn-more']);
  }

  navigateToFavourites() {
    this.router.navigate(['/favourites']);
  }

  navigateToLibrary() {
    this.router.navigate(['/library']);
  }

  navigateToOrders() {
    this.router.navigate(['/orders']);
  }

  navigateToMarketplace() {
    this.router.navigate(['/marketplace']);
  }

  navigateToSearch() {
    this.router.navigate(['/search']);
  }

  navigateToCart() {
    this.router.navigate(['/cart']);
  }

  navigateToAccount() {
    this.router.navigate(['/account']);
  }
}
