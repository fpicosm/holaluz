<template>
  <header>
    <HlToolbar class="justify-center">
      <a href="/">
        <img src="../assets/logo.svg" title="Logo" />
      </a>
    </HlToolbar>
  </header>

  <main class="h-full flex items-center justify-center flex-wrap gap-x-10 gap-y-1 p-4">
    <template v-if="!loading">
      <template v-if="!client">
        <div class="text-center">
          <hl-label tag="h1" class="mb-8">
            {{ $t('label.no_client') }}
          </hl-label>

          <a href="/" class="text-lg">
            <hl-button :label="$t('label.home')" />
          </a>
        </div>
      </template>

      <template v-else>
        <div class="flex flex-col gap-y-10">
          <HlCard class="flex flex-col gap-y-4">
            <hl-label tag="h1" v-text="$t('label.client')" />
            <ul class="flex flex-col gap-y-1">
              <li>
                <span class="font-bold">
                  {{ $t('client.full_name') }}:
                </span>
                <span v-text="client.full_name" />
              </li>

              <li>
                <span class="font-bold">
                  {{ $t('client.address') }}:
                </span>
                <span v-text="client.address" />
              </li>

              <li>
                <span class="font-bold">
                  {{ $t('client.role') }}:
                </span>
                <span v-text="client.role" />
              </li>

              <li>
                <span class="font-bold">
                  {{ $t('client.building_type') }}:
                </span>
                <span v-text="client.building_type" />
              </li>
            </ul>
          </HlCard>

          <HlCard class="flex flex-col gap-y-4">
            <hl-label tag="h1" v-text="$t('label.supply_point')" />
            <ul class="flex flex-col gap-y-1">
              <li>
                <span class="font-bold">
                  {{ $t('supply_point.tariff') }}:
                </span>
                <span v-text="supplyPoint.tariff" />
              </li>

              <li>
                <span class="font-bold">
                  {{ $t('supply_point.invoiced_amount') }}:
                </span>
                <span v-text="$n(Number.parseFloat(supplyPoint.invoiced_amount), 'currency')" />
              </li>

              <li>
                <span class="font-bold">
                  {{ $t('supply_point.power') }}:
                </span>
                <span>
                  {{ Object.values(supplyPoint.power).map(formatPower).join(', ') }}
                </span>
              </li>

              <li>
                <span class="font-bold">
                  {{ $t('supply_point.neighbors') }}:
                </span>
                <span>
                  {{ supplyPoint.neighbors.length }}
                  <template v-if="supplyPoint.neighbors.length">
                    ({{ supplyPoint.neighbors.join(', ') }})
                  </template>
                </span>
              </li>
            </ul>
          </HlCard>
        </div>

        <HlCard class="flex flex-col gap-y-4">
          <hl-label tag="h1" v-text="$t('label.rooftop_revolution')" />
          <ul class="flex flex-col gap-y-1">
            <li>
              <template v-if="isRooftopClient">
                <span class="font-bold">
                  {{ $t('rooftop_revolution.user') }}:
                </span>
                <span>
                  <hl-tag class="ml-1" :text="capitalize(rooftopUsertype)" />
                </span>
              </template>
              <span v-else v-text="$t('rooftop_revolution.unavailable')" />
            </li>

            <li v-if="isRooftopClient">
              <span class="font-bold">
                {{ $t('rooftop_revolution.discount') }}:
              </span>
              <span v-text="`${rooftopDiscount}%`" />
            </li>
          </ul>
        </HlCard>
      </template>
    </template>
  </main>
</template>

<script setup>
import HlCard from '@/components/local/HlCard'
import { computed, defineProps, onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import { sumBy } from '../utils/array'
import { capitalize } from '../utils/string'

const BASIC = 'basic'
const SPECIAL = 'special'
const STANDARD = 'standard'

const props = defineProps({
  cups: {
    type: String,
    required: true
  }
})

const store = useStore()

onBeforeMount(() => store.dispatch('loadData'))

const loading = computed(() => store.state.loading)

const client = computed(() => store.getters['clients/getByCups'](props.cups))
const supplyPoint = computed(() => store.getters['supplyPoints/getByCups'](props.cups))
const isRooftopClient = computed(() => client.value.building_type === 'house' && supplyPoint.value.neighbors.length > 1)
const rooftopUsertype = computed(() => {
  if (!isRooftopClient.value) return false

  const neighbors = (supplyPoint.value.neighbors || []).map(store.getters['supplyPoints/getByCups'])
  if (sumBy(neighbors, 'invoiced_amount') > 100) return SPECIAL

  const maxBy = key => neighbors.reduce((max, { power }) => Math.max(max, power[key]), 0)
  if (Object.entries(supplyPoint.value.power).every(([key, power]) => power > maxBy(key))) return BASIC

  return STANDARD
})

const rooftopDiscount = computed(() => ({
  [SPECIAL]: 12,
  [BASIC]: 5,
  [STANDARD]: 0
})[rooftopUsertype.value])

const formatPower = power => `${power} watts`
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  flex-direction: column;

  li {
    display: flex;
    justify-content: space-between;
  }
}
</style>
