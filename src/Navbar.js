import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-sm bg-light navbar-light">
  <div class="container-fluid">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="/"> Home </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">Job Aids </a>
        </li>
      </ul>
      <button className='btn btn-success rounded-pill'> Log In </button>
    </div>
  </div>
</nav>
    </div>
  )
}
