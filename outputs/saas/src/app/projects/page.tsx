<div class="container mx-auto px-4 py-8" *ngIf="currentUser">
  <h1 class="text-3xl font-bold mb-4">My Projects</h1>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <div class="bg-white shadow-md p-4 rounded" *ngFor="let project of currentUser.projects">
      <h2 class="text-xl font-bold mb-2">{{ project.name }}</h2>
      <p class="text-gray-600 mb-2">{{ project.description }}</p>
      <div class="flex items-center justify-between">
        <span class="text-gray-500">Created at: {{ project.createdAt }}</span>
        <router-link [routerLink]="['/projects', project.id]" class="text-blue-600 hover:underline">View</router-link>
      </div>
    </div>
  </div>
</div>