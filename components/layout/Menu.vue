<template>
  <ul class="navigation">
    <li class="current dropdown">
      <NuxtLink to="/">Home</NuxtLink>
      <ul>
        <li>
          <NuxtLink to="/">Home page 01</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/index-2">Home page 02</NuxtLink>
        </li>
      </ul>
    </li>
    <li class="dropdown">
      <NuxtLink to="#">Rooms & Suites</NuxtLink>
      <ul>
        <li>
          <NuxtLink to="/page-rooms">Rooms</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/page-rooms-suite">Rooms and Suits</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/room-details">Room Details</NuxtLink>
        </li>
      </ul>
    </li>
    <li class="dropdown">
      <NuxtLink to="#">Pages</NuxtLink>
      <ul>
        <li>
          <NuxtLink to="/page-about">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/page-pricing">Pricing Table</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/page-testimonial">Testimonials</NuxtLink>
        </li>
        <li class="dropdown">
          <NuxtLink to="/">Team</NuxtLink>
          <ul>
            <li>
              <NuxtLink to="/page-team">Team grid</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/page-team-details">Team Details</NuxtLink>
            </li>            
          </ul>
        </li>
      </ul>
    </li>
    <li class="dropdown">
      <NuxtLink to="#">News</NuxtLink>
      <ul>
        <li>
          <NuxtLink to="/news-grid">News Grid</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/news-details">News Details</NuxtLink>
        </li>
      </ul>
    </li>
    <li>
      <NuxtLink to="/page-contact">Contact</NuxtLink>
    </li>
  </ul>
</template>