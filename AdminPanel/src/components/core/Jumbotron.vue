<template>
  <div
    :style="!loggedIn ? 'background-color: white;' : 'background-color: white;'">
    <login-toolbar></login-toolbar>
  </div>
</template>
<script>
  export default {
    metaInfo: {
      title: 'Bluepeople Inicio de sesión',
      meta: [
        { 
          name: 'Bienvenidos a Bluepeople', 
          content: 'Inicia sesión para obtener acceso a los paneles de inversionistas y de desarrolladores.' 
        }
      ]
    },
    components: {
      HomeImage: () => import('@/components/core/login_image'),
      LoginToolbar: () => import('@/components/core/login_toolbar')
    }
  }
</script>
