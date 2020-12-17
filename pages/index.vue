<template>
  <div>
    <i18n path="heading.main" tag="h2" class="title">
      <strong>{{ $t('heading.highlight') }}</strong>
    </i18n>
  </div>
</template>

<script>
export default {}
</script>

<i18n locale="en">
{
  "heading": {
    "main": "Hello, {0}",
    "highlight": "World"
  }
}
</i18n>

<i18n locale="fr">
{
  "heading": {
    "main": "Bonjour, {0}",
    "highlight": "Monde"
  }
}
</i18n>
