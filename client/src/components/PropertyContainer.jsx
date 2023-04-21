import React from 'react';

function PropertyContainer({children}) {
  return (
    <div class="col-lg-4 mb-lg-0 mb-4">
      <div class="card">
        <div class="card-header p-0 m-3 mt-n4 position-relative z-index-2">
          <a class="d-block blur-shadow-image">
            <img src="https://images.unsplash.com/photo-1592489637182-8c172d6d7826?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2300&q=80" alt="img-blur-shadow" class="img-fluid border-radius-lg"/>
          </a>
        </div>
        <div class="card-body pt-2">
          <span class="text-gradient text-warning text-uppercase text-xs font-weight-bold my-2">{ children[0] }</span>
          <a href="javascript:;" class="h5 d-block text-dark">
            { children[1] }
          </a>
          <p class="card-description mb-4">
            { children[2] }
          </p>
          <div class="author align-items-center">
            <img src="../assets/img/bruce-mars.jpg" alt="..." class="avatar shadow border-radius-lg"/>
            <div class="name ps-3">
              <span>Mathew Glock</span>
              <div class="stats">
                <small>Posted on 28 February</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyContainer;
