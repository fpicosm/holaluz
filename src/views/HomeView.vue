<template>
  <header>
    <HlToolbar class="justify-center">
      <img src="../assets/logo.svg" title="Logo" />
    </HlToolbar>
  </header>

  <main class="flex justify-center items-center h-full py-2">
    <form class="inline-flex" @submit.prevent="onSubmit">
      <hl-input
        v-model="searchValue"
        autofocus
        :placeholder="t('placeholder')"
        required
        size="25"
        type="search"
      >
        <template #after>
          <HlButton type="submit">
            {{ t('submit') }}
          </HlButton>
        </template>
      </hl-input>
    </form>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const router = useRouter()

const searchValue = ref('')
const { t } = useI18n({
  useScope: 'local'
})

const onSubmit = () => {
  router.push({
    name: 'search',
    query: {
      cups: searchValue.value
    }
  })
}
</script>

<i18n>
{
  "en": {
    "placeholder": "Insert CUPS here",
    "submit": "Search"
  }
}
</i18n>
