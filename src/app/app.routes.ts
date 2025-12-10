import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () =>
            import('./components/home/home').then(m => m.Home)
    },
    {
        path: 'theories',
        loadComponent: () =>
            import('./components/theories/theories').then(m => m.Theories)
    },
    {
        path: 'stories',
        loadComponent: () =>
            import('./components/stories/stories').then(m => m.Stories)
    },
    {
        path: 'concepts',
        loadComponent: () =>
            import('./components/concepts/concepts').then(m => m.Concepts)
    },
    {
        path: 'video-games',
        loadComponent: () =>
            import('./components/video-games/video-games').then(m => m.VideoGames)
    },
    {
        path: 'politic-game-simulator',
        loadComponent: () =>
            import('./components/video-games/politic-game-simulator/politic-game-simulator').then(m => m.PoliticGameSimulator)
    },
    {
        path: 'about',
        loadComponent: () =>
            import('./components/about/about').then(m => m.About)
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/error-404' } // fallback
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
