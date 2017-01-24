<template>
    <section class="container">
        <FormContact/>
        <div class="block__button">
                <nuxt-link class="button" to="/">
                    вернуться
                </nuxt-link>
        </div>
    </section>
</template>

<script>
import FormContact from '~components/FormContact.vue'
    export default {
        components: {
            FormContact
        }
    }
</script>