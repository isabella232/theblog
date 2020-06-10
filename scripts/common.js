/*
 * lazysizes - v5.2.0
 * The MIT License (MIT)
 * Copyright (c) 2015 Alexander Farkas
 */
!function(a,b){var c=b(a,a.document,Date);a.lazySizes=c,"object"==typeof module&&module.exports&&(module.exports=c)}("undefined"!=typeof window?window:{},function(a,b,c){"use strict";var d,e;if(function(){var b,c={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};e=a.lazySizesConfig||a.lazysizesConfig||{};for(b in c)b in e||(e[b]=c[b])}(),!b||!b.getElementsByClassName)return{init:function(){},cfg:e,noSupport:!0};var f=b.documentElement,g=a.HTMLPictureElement,h="addEventListener",i="getAttribute",j=a[h].bind(a),k=a.setTimeout,l=a.requestAnimationFrame||k,m=a.requestIdleCallback,n=/^picture$/i,o=["load","error","lazyincluded","_lazyloaded"],p={},q=Array.prototype.forEach,r=function(a,b){return p[b]||(p[b]=new RegExp("(\\s|^)"+b+"(\\s|$)")),p[b].test(a[i]("class")||"")&&p[b]},s=function(a,b){r(a,b)||a.setAttribute("class",(a[i]("class")||"").trim()+" "+b)},t=function(a,b){var c;(c=r(a,b))&&a.setAttribute("class",(a[i]("class")||"").replace(c," "))},u=function(a,b,c){var d=c?h:"removeEventListener";c&&u(a,b),o.forEach(function(c){a[d](c,b)})},v=function(a,c,e,f,g){var h=b.createEvent("Event");return e||(e={}),e.instance=d,h.initEvent(c,!f,!g),h.detail=e,a.dispatchEvent(h),h},w=function(b,c){var d;!g&&(d=a.picturefill||e.pf)?(c&&c.src&&!b[i]("srcset")&&b.setAttribute("srcset",c.src),d({reevaluate:!0,elements:[b]})):c&&c.src&&(b.src=c.src)},x=function(a,b){return(getComputedStyle(a,null)||{})[b]},y=function(a,b,c){for(c=c||a.offsetWidth;c<e.minSize&&b&&!a._lazysizesWidth;)c=b.offsetWidth,b=b.parentNode;return c},z=function(){var a,c,d=[],e=[],f=d,g=function(){var b=f;for(f=d.length?e:d,a=!0,c=!1;b.length;)b.shift()();a=!1},h=function(d,e){a&&!e?d.apply(this,arguments):(f.push(d),c||(c=!0,(b.hidden?k:l)(g)))};return h._lsFlush=g,h}(),A=function(a,b){return b?function(){z(a)}:function(){var b=this,c=arguments;z(function(){a.apply(b,c)})}},B=function(a){var b,d=0,f=e.throttleDelay,g=e.ricTimeout,h=function(){b=!1,d=c.now(),a()},i=m&&g>49?function(){m(h,{timeout:g}),g!==e.ricTimeout&&(g=e.ricTimeout)}:A(function(){k(h)},!0);return function(a){var e;(a=!0===a)&&(g=33),b||(b=!0,e=f-(c.now()-d),e<0&&(e=0),a||e<9?i():k(i,e))}},C=function(a){var b,d,e=99,f=function(){b=null,a()},g=function(){var a=c.now()-d;a<e?k(g,e-a):(m||f)(f)};return function(){d=c.now(),b||(b=k(g,e))}},D=function(){var g,m,o,p,y,D,F,G,H,I,J,K,L=/^img$/i,M=/^iframe$/i,N="onscroll"in a&&!/(gle|ing)bot/.test(navigator.userAgent),O=0,P=0,Q=0,R=-1,S=function(a){Q--,(!a||Q<0||!a.target)&&(Q=0)},T=function(a){return null==K&&(K="hidden"==x(b.body,"visibility")),K||!("hidden"==x(a.parentNode,"visibility")&&"hidden"==x(a,"visibility"))},U=function(a,c){var d,e=a,g=T(a);for(G-=c,J+=c,H-=c,I+=c;g&&(e=e.offsetParent)&&e!=b.body&&e!=f;)(g=(x(e,"opacity")||1)>0)&&"visible"!=x(e,"overflow")&&(d=e.getBoundingClientRect(),g=I>d.left&&H<d.right&&J>d.top-1&&G<d.bottom+1);return g},V=function(){var a,c,h,j,k,l,n,o,q,r,s,t,u=d.elements;if((p=e.loadMode)&&Q<8&&(a=u.length)){for(c=0,R++;c<a;c++)if(u[c]&&!u[c]._lazyRace)if(!N||d.prematureUnveil&&d.prematureUnveil(u[c]))ba(u[c]);else if((o=u[c][i]("data-expand"))&&(l=1*o)||(l=P),r||(r=!e.expand||e.expand<1?f.clientHeight>500&&f.clientWidth>500?500:370:e.expand,d._defEx=r,s=r*e.expFactor,t=e.hFac,K=null,P<s&&Q<1&&R>2&&p>2&&!b.hidden?(P=s,R=0):P=p>1&&R>1&&Q<6?r:O),q!==l&&(D=innerWidth+l*t,F=innerHeight+l,n=-1*l,q=l),h=u[c].getBoundingClientRect(),(J=h.bottom)>=n&&(G=h.top)<=F&&(I=h.right)>=n*t&&(H=h.left)<=D&&(J||I||H||G)&&(e.loadHidden||T(u[c]))&&(m&&Q<3&&!o&&(p<3||R<4)||U(u[c],l))){if(ba(u[c]),k=!0,Q>9)break}else!k&&m&&!j&&Q<4&&R<4&&p>2&&(g[0]||e.preloadAfterLoad)&&(g[0]||!o&&(J||I||H||G||"auto"!=u[c][i](e.sizesAttr)))&&(j=g[0]||u[c]);j&&!k&&ba(j)}},W=B(V),X=function(a){var b=a.target;if(b._lazyCache)return void delete b._lazyCache;S(a),s(b,e.loadedClass),t(b,e.loadingClass),u(b,Z),v(b,"lazyloaded")},Y=A(X),Z=function(a){Y({target:a.target})},$=function(a,b){try{a.contentWindow.location.replace(b)}catch(c){a.src=b}},_=function(a){var b,c=a[i](e.srcsetAttr);(b=e.customMedia[a[i]("data-media")||a[i]("media")])&&a.setAttribute("media",b),c&&a.setAttribute("srcset",c)},aa=A(function(a,b,c,d,f){var g,h,j,l,m,p;(m=v(a,"lazybeforeunveil",b)).defaultPrevented||(d&&(c?s(a,e.autosizesClass):a.setAttribute("sizes",d)),h=a[i](e.srcsetAttr),g=a[i](e.srcAttr),f&&(j=a.parentNode,l=j&&n.test(j.nodeName||"")),p=b.firesLoad||"src"in a&&(h||g||l),m={target:a},s(a,e.loadingClass),p&&(clearTimeout(o),o=k(S,2500),u(a,Z,!0)),l&&q.call(j.getElementsByTagName("source"),_),h?a.setAttribute("srcset",h):g&&!l&&(M.test(a.nodeName)?$(a,g):a.src=g),f&&(h||l)&&w(a,{src:g})),a._lazyRace&&delete a._lazyRace,t(a,e.lazyClass),z(function(){var b=a.complete&&a.naturalWidth>1;p&&!b||(b&&s(a,"ls-is-cached"),X(m),a._lazyCache=!0,k(function(){"_lazyCache"in a&&delete a._lazyCache},9)),"lazy"==a.loading&&Q--},!0)}),ba=function(a){if(!a._lazyRace){var b,c=L.test(a.nodeName),d=c&&(a[i](e.sizesAttr)||a[i]("sizes")),f="auto"==d;(!f&&m||!c||!a[i]("src")&&!a.srcset||a.complete||r(a,e.errorClass)||!r(a,e.lazyClass))&&(b=v(a,"lazyunveilread").detail,f&&E.updateElem(a,!0,a.offsetWidth),a._lazyRace=!0,Q++,aa(a,b,f,d,c))}},ca=C(function(){e.loadMode=3,W()}),da=function(){3==e.loadMode&&(e.loadMode=2),ca()},ea=function(){if(!m){if(c.now()-y<999)return void k(ea,999);m=!0,e.loadMode=3,W(),j("scroll",da,!0)}};return{_:function(){y=c.now(),d.elements=b.getElementsByClassName(e.lazyClass),g=b.getElementsByClassName(e.lazyClass+" "+e.preloadClass),j("scroll",W,!0),j("resize",W,!0),j("pageshow",function(a){if(a.persisted){var c=b.querySelectorAll("."+e.loadingClass);c.length&&c.forEach&&l(function(){c.forEach(function(a){a.complete&&ba(a)})})}}),a.MutationObserver?new MutationObserver(W).observe(f,{childList:!0,subtree:!0,attributes:!0}):(f[h]("DOMNodeInserted",W,!0),f[h]("DOMAttrModified",W,!0),setInterval(W,999)),j("hashchange",W,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(a){b[h](a,W,!0)}),/d$|^c/.test(b.readyState)?ea():(j("load",ea),b[h]("DOMContentLoaded",W),k(ea,2e4)),d.elements.length?(V(),z._lsFlush()):W()},checkElems:W,unveil:ba,_aLSL:da}}(),E=function(){var a,c=A(function(a,b,c,d){var e,f,g;if(a._lazysizesWidth=d,d+="px",a.setAttribute("sizes",d),n.test(b.nodeName||""))for(e=b.getElementsByTagName("source"),f=0,g=e.length;f<g;f++)e[f].setAttribute("sizes",d);c.detail.dataAttr||w(a,c.detail)}),d=function(a,b,d){var e,f=a.parentNode;f&&(d=y(a,f,d),e=v(a,"lazybeforesizes",{width:d,dataAttr:!!b}),e.defaultPrevented||(d=e.detail.width)&&d!==a._lazysizesWidth&&c(a,f,e,d))},f=function(){var b,c=a.length;if(c)for(b=0;b<c;b++)d(a[b])},g=C(f);return{_:function(){a=b.getElementsByClassName(e.autosizesClass),j("resize",g)},checkElems:g,updateElem:d}}(),F=function(){!F.i&&b.getElementsByClassName&&(F.i=!0,E._(),D._())};return k(function(){e.init&&F()}),d={cfg:e,autoSizer:E,loader:D,init:F,uP:w,aC:s,rC:t,hC:r,fire:v,gW:y,rAF:z}});

/*
 * scrani.js
 */
(() => {
  const scrani = (() => {

    const scrani = {

      // config
      animations: [
        { selector: "body>main>div", animation: "eager-appear" },
        { selector: "body>main>div>p>img", animation: "wipe" }
      ],

      scrollY: -1,
      scrollYBottom: 0,
    }

    // setup
    scrani.setup = () => {
      for (let i = 0; i < scrani.animations.length; i++) {
        const a = scrani.animations[i];
        a.elems = document.querySelectorAll(a.selector);
      }
    }

    // update single element
    scrani.updateElement = (el, animation) => {
      let progress = 0.0;
      const offsetTop = el.getBoundingClientRect().top + window.pageYOffset;

      if (scrani.scrollY > offsetTop) {
        progress = 1.0;
      } else if (scrani.scrollYBottom < offsetTop) {
        progress = 0.0;
      } else {
        progress = 1.0 - (offsetTop - scrani.scrollY) / window.innerHeight;
      }

      // HACK: manually specified animation
      progress = progress * 2;
      if (progress > 1) progress = 1;

      if (animation == "eager-appear") {
        const transY = 100 - progress * 100;
        const opacity = progress;
        el.style.opacity = `${opacity}`
        el.style.transform = `translateY(${transY}px)`;
      }

      if (animation == "wipe") {
        const right = Math.round(100 - progress * 100);
        el.style = `clip-path: inset(0 ${right}% 0 0); -webkit-clip-path: inset(0 ${right}% 0 0)`;
      }
    }

    // update to get called by requestAnimationFrame
    scrani.update = (scrollY) => {

      if (scrollY == scrani.scrollY) return;

      scrani.scrollY = scrollY;
      scrani.scrollYBottom = scrollY + window.innerHeight;

      for (let i = 0; i < scrani.animations.length; i++) {
        const a = scrani.animations[i];
        for (let j = 0; j < a.elems.length; j++) {
          scrani.updateElement(a.elems[j], a.animation);
        }
      }
    }

    //to be called onload
    scrani.onload = () => {

      scrani.setup();
      const repaint = () => {
        scrani.update(window.scrollY)
        window.requestAnimationFrame(repaint)
      }
      window.requestAnimationFrame(repaint);

    }

    return (scrani)
  })();
  window.scrani = scrani;
})();

/**
 * Creates a tag with the given name and attributes.
 * @param {string} name The tag name
 * @param {object} attrs An object containing the attributes
 * @returns The new tag
 */
export function createTag(name, attrs) {
  const el = document.createElement(name);
  if (typeof attrs === 'object') {
    for (let [key, value] of Object.entries(attrs)) {
      el.setAttribute(key, value);
    }
  }
  return el;
}

/**
 * Adds page type as body class.
 */
export function addPageTypeAsBodyClass() {
  document.body.classList.add(`${window.blog.pageType}-page`);
}

/**
 * Wraps nodes with a new parent node.
 * @param {node} newparent The new parent node
 * @param {array} nodes The nodes to wrap
 */
export function wrapNodes(newparent, nodes) {	
  nodes.forEach((el, index) => {	
    newparent.appendChild(el.cloneNode(true));	
    if (newparent.children.length !== 1) {	
      el.parentNode.removeChild(el);	
    } else {	
      el.parentNode.replaceChild(newparent, el);	
    }	
  });	
}	

/**
 * Uses a selector to find and wrap nodes with a new parent element,
 * which will get the specified CSS class.
 * @param {string} classname The CSS class for the wrapping node
 * @param {array|string} selectors The selectors for the affected nodes
 */
export function wrap(classname, selectors) {	
  if (!Array.isArray(selectors)) {
    selectors=[selectors];
  }
  const div = document.createElement('div');	
  div.className = classname;

  selectors.forEach((selector) => {
    const elems = document.querySelectorAll(selector);
    wrapNodes(div, elems);	
  });
}

/**
 * Adds a CSS class to either the nodes found using the selector,
 * or one of their parent nodes.
 * @param {string} selector The selector for the affected nodes
 * @param {string} cssClass The CSS class to add
 * @param {number} parent The number of parent nodes to climb
 */
export function addClass(selector, cssClass, parent) {
  document.querySelectorAll(selector).forEach((el) => {
    if (el) {
      var up=parent;
      while (up) {
        el = el.parentNode;
        up--;
      }
      el.classList.add(cssClass);
    }  
  });
} 

/**
 * Removes header and footer if empty.
 */
export function removeHeaderAndFooter () {
  // workaound until the ESI is fixed
  const header = document.querySelector("header");
  const footer = document.querySelector("footer");
  if (header.innerHTML == "/header.plain.html") header.innerHTML = "";
  if (footer.innerHTML == "/footer.plain.html") footer.innerHTML = "";
}

/**
 * Returns the section with a given index, or the last section if index is undefined.
 * @param {number} index The section index
 * @returns {element} The section
 */
export function getSection(index) {
  const nodes = Array.from(document.querySelectorAll("main > div"));
  if (nodes.length === 0) {
    // create a section
    nodes.push(document.querySelector('main').appendChild(
      createTag('div', { class: 'default' })));
  }
  return index !== undefined && nodes.length > index ? nodes[index] : nodes[nodes.length - 1];
}

/**
 * Returns a relative URL using the specified type and name,
 * prefixed with context and language.
 * @param {string} type The type of the target page
 * @param {*} name The name of the target page
 * @returns {string} The URL
 */
export function getLink(type, name) {
  if (!type.endsWith('s')) type += 's';
  return `${window.blog.context}${window.blog.language}/${type}/${name.replace(/\s/gm, '-').replace(/\&amp;/gm,'').replace(/\&/gm,'').toLowerCase()}.html`;
}

/**
 * Replaces variables in the text of an element using the specified data.
 * @param {element} elem The element
 * @param {object} data The object containing name/value pairs
 * @returns {element} The element
 */
export function fillData(elem, data) {
  const TOKEN_REGEXP = /{{(.+)}}/;
  for (let i = 0; i < elem.attributes.length; i++) {
    const attr = elem.attributes[i];
    const match = TOKEN_REGEXP.exec(attr.value);
    if (match) {
      attr.value = attr.value.replace(TOKEN_REGEXP, data[match[1]] || '');
    }
  }
  let node = elem.firstChild;
  while (node) {
    if (node.nodeType === Node.TEXT_NODE) {
      const match = TOKEN_REGEXP.exec(node.textContent);
      if (match) {
        node.textContent = node.textContent.replace(TOKEN_REGEXP, data[match[1]] || '');
      }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      fillData(node, data);
    }
    node = node.nextSibling;
  }
  return elem;
}

/**
 * Retrieves article paths from an element or one of its parent elements.
 * @param {element} el The element
 * @param {number} parent The number of parent elements to climb
 * @param {boolean} removeContainer <code>true</code> if the container should be removed
 *                                  when done, else <code>false</code> (default)
 * @returns {array} The article paths
 */
export function getPostPaths(el, parent, removeContainer) {
  const paths=[];
  if (typeof el === 'string') {
    el = document.querySelector(el);
  }
  if (el) {
    let up = parent;
    while (up) {
      el = el.parentNode;
      up -= 1;
    }
    el.querySelectorAll('a').forEach((e) => {
      if (!e.textContent.startsWith('http')) return;
      const url = new URL(e.getAttribute('href'));
      let path = url.pathname;
      const p = path.split('/');
      if (p.length >= 3 && p[2] !== 'drafts' && p[2] !== 'publish') {
        // re-add /publish/ for the query
        p.splice(2, 0, 'publish');
        path = p.join('/');
      }
      paths.push(path);
    });
    if (removeContainer) {
      el.remove();
    }
  }
  return paths;
}

/**
 * Prepares a query hit object for use as a card.
 * @param {object} item The query hit object
 * @returns {object} The processed query hit object
 */
export function itemTransformer(item) {
  const itemParams = {
    hero: item.hero ? `${item.hero}?height=512&crop=3:2&auto=webp` : '#',
    date: new Date(item.date * 1000).toLocaleDateString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      timeZone: 'UTC',
    }).replace(/\//g, '-'),
    authorUrl: getLink(window.blog.TYPE.AUTHOR, item.author),
    topic: item.topics.length > 0 ? item.topics[0] : '',
    topicUrl: item.topics.length > 0 ? getLink(window.blog.TYPE.TOPIC, item.topics[0]) : '',
    path: !window.location.hostname.endsWith('.page') ? item.path.replace('/publish/', '/') : item.path,
  }
  return Object.assign({}, item, itemParams);
};

/**
 * Creates a card using the specified query hit object and
 * adds it to the specified container.
 * @param {object} hit The query hit with the card data.
 * @param {element} $container The container element to add the card to
 * @param {element} $template The template element to use (optional)
 * @returns {element} The card element
 */
export function addCard(hit, $container, $template) {
  if (!$template) $template = document.getElementById('post-card');
  const $item = $template.content.cloneNode(true).firstElementChild;
  fillData($item, hit);
  $container.appendChild($item);
  return $item;
}

/**
 * Creates an Algolia query function using the specified App ID and key.
 * @param {string} appId The Algolia App ID
 * @param {string} key The Algolia user key
 * @returns {function} The query function
 */
export function helixQuery(appId, key) {
  return async (queries, hitsPerPage) => {
    const page = window.blog.nextPage || 0;
    window.blog.nextPage = page + 1;
    // console.log('query for page', page);
    if (!queries || queries.length === 0) return { hits: []};
    const url = new URL(`https://${appId}-dsn.algolia.net/1/indexes/*/queries`);
    const serializeQueryParameters = (q) => {
      const sp = new URLSearchParams();
      Object.entries(q)
        .filter(([key]) => key !== 'indexName' && key !== 'customSort')
        .forEach(([key, value]) => {
          if (Array.isArray(value)) {
            value.forEach((v) => {
              sp.append(key, v);
            });
          } else {
            sp.append(key, value);
          }
        });
      return sp.toString();
    };
    const requests = queries.map(q => {
      return {
        indexName: q.indexName,
        params: serializeQueryParameters({ ...q, page, hitsPerPage }),
      };
    });

    /*
    fetch from algolia
    */
    
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'X-Algolia-API-Key': key,
        'X-Algolia-Application-Id': appId,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ requests }),
    });

    /*
    fetch locally for offline dev
    */
    // const res = await fetch('/query-results.json', {
    //   method: 'GET'
    // });

    const { results } = await res.json();
    if (!results) return [];
    let extraHits = [];
    let nbHits = 0;
    if (results.length > 1 && results[results.length -1].params.startsWith('filters=path')) {
      // collect extra hits from last result separately
      const extraResult = results.pop();
      extraResult.hits.forEach((hit) => extraHits.push(hit));
    }
    results.forEach((result, i) => {
      nbHits += result.nbHits;
      const { customSort } = queries[i];
      if (customSort) {
        result.hits.sort(customSort);
      }
    });
    const hits = results
      .reduce((a, result) => {
        // concat all hits in rest of results
        a.push(...result.hits);
        return a;
      }, [])
      .reduce((unique, hit) => {
        return unique.find((item) => item.objectID === hit.objectID)
          ? unique : [...unique, hit];
      }, []);
    return { hits: hits.slice(0, hitsPerPage), nbHits, extraHits };
  }
}

/**
 * Creates an Algolia query and executes it.
 * @param {object} opts The search options
 */
export function setupSearch({
  indexName = 'adobe--theblog--blog-posts',
  hitsPerPage = 12,
  facetFilters = [],
  omitEmpty = false,
  extraPaths = [],
  transformer = itemTransformer,
  callback = () => {},
}) {
  const query = helixQuery('A8PL9E4TZT', '49f861a069d3c1cdb2c15f6db7929199');
  const filters = Array.from(facetFilters);
  const featured = getPostPaths('h2#featured-posts', 1, true);

  const queries = [];
  if (filters.length === 0 || filters[0].length > 0) {
    filters.push(`parents:${window.blog.context}${window.blog.language}`);
    filters.push(`date < ${Math.round(Date.now()/1000)}`); // hide articles with future dates
    queries.push({
      indexName,
      filters: filters.join(' AND '),
    });
  }

  // extra path handling
  if (extraPaths.length) {
    queries.push({
      indexName,
      filters: extraPaths.map(p => `path:${p.substr(1)}`).join(' OR '),
    })
  }

  if (featured.length) {
    queries.unshift({
      indexName,
      filters: featured.map(p => `path:${p.substr(1)}`).join(' OR '),
      customSort: (hit1, hit2) => featured.indexOf(`/${hit1.path}`) - featured.indexOf(`/${hit2.path}`),
    })
  }

  query(queries, hitsPerPage)
    .then(({
      hits = [],
      nbHits = 0,
      extraHits = [],
    }) => {
      let $deck = document.querySelector('.articles .deck');
      if (!$deck) {
        if (hits.length || !omitEmpty) {
          // add card container
          $deck = createTag('div', { 'class': 'deck' });
          const $container = createTag('div', { 'class': 'default articles' });
          $container.appendChild($deck);
          document.querySelector('main').appendChild($container);
        }
      }
      if (!hits.length) {
        if (!omitEmpty) {
          $deck.innerHTML = '<div class="articles-empty"><div>';
        }
      } else {
        // add hits to card container
        hits
          .map(transformer)
          .forEach((hit) => addCard(hit, $deck));

        let $more = $deck.parentNode.querySelector('.load-more');
        if (nbHits > (hitsPerPage * window.blog.nextPage)) {
          if (!$more) {
            // add button to load more
            const $more = createTag('a', { 'class': 'action primary load-more' });
            $more.addEventListener('click', fetchArticles);
            $deck.parentNode.appendChild($more);
            const title = window.getComputedStyle($more, ':before').getPropertyValue('content');
            if (title !== 'normal') {
              $more.setAttribute('title', title.substring(1, title.length-1));
            }
          }
        } else if ($more) {
          $more.remove();
        }
      }
      return { hits, nbHits, extraHits };
    })
    .then(callback);
}

/**
 * Reformats a date string from "01-15-2020" to "January 15, 2020"
 * @param {string} date The date string to format
 * @returns {string} The formatted date
 */
function formatLocalDate(date) {
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];  
  const dateObj = date.split('-');

  return monthNames[parseInt(dateObj[0])-1] + " " + dateObj[1] + ", " + dateObj[2];
}

/**
 * Extracts metadata from the page and adds it to the head.
 */
export function handleMetadata() {
  // store author and date
  const r = /^By (.*)\n*(.*)$/gmi.exec(getSection(2).innerText);
  window.blog.author = r && r.length > 0 ? r[1] : '';
  const d = r && r.length > 1 ? /\d{2}[.\/-]\d{2}[.\/-]\d{4}/.exec(r[2]) : null;
  window.blog.date = d && d.length > 0 ? formatLocalDate(d[0]) : '';
  // store topics
  const last = getSection();
  let topics, topicContainer;
  Array.from(last.children).forEach((i) => {
    const r = /^Topics\: ?(.*)$/gmi.exec(i.innerText);
    if (r && r.length > 0) {
      topics = r[1].split(/\,\s*/);
      topicContainer = i;
    }
  });
  window.blog.topics = topics
    ? topics.filter((topic) => topic.length > 0)
    : [];
  if (topicContainer) {
    topicContainer.remove();
  }
  // store products
  let products, productContainer;
  Array.from(last.children).forEach((i) => {
    const r = /^Products\: ?(.*)$/gmi.exec(i.innerText);
    if (r && r.length > 0) {
      products = r[1].split(/\,\s*/);
      productContainer = i;
    }
  });
  window.blog.products = products
  ? products.filter((product) => product.length > 0)
  : [];
  if (productContainer) {
    productContainer.remove();
  }
  if (last.innerText.trim() === '') {
    last.remove(); // remove empty last div
  }

  const md = [{
    property: 'og:locale',
    content: window.blog.language,
  },{
    property: 'article:published_time',
    content: window.blog.date ? new Date(window.blog.date).toISOString() : '',
  }];
  // add topics and products as article:tags
  [...window.blog.topics].forEach((topic) => md.push({
      property: 'article:tag',
      content: topic,
  }));
  [...window.blog.products].forEach((product) => md.push({
    property: 'article:tag',
    content: `Adobe ${product}`,
  }));
  // add meta tags to DOM
  const frag = document.createDocumentFragment();
  md.forEach((meta) => {
    frag.appendChild(createTag('meta', { property: meta.property, content: meta.content }));
  });
  document.head.append(frag);
}

/**
 * Fetches articles based on the page type.
 */
export function fetchArticles() {
  let facetFilters, omitEmpty;
  if (window.blog.pageType === window.blog.TYPE.POST) {
    facetFilters = [''];
    omitEmpty = true; // don't display anything if no results
  } else if (window.blog.pageType === window.blog.TYPE.TOPIC) {
    facetFilters = [`topics:"${document.title}"`];
  } else if (window.blog.pageType === window.blog.TYPE.AUTHOR) {
    facetFilters = [`author:"${document.title.split(',')[0]}"`];
  }
  setupSearch({
    facetFilters,
    omitEmpty,
  });
}

window.addEventListener('load', function() {
  removeHeaderAndFooter();
  addPageTypeAsBodyClass();
  handleMetadata();
  scrani.onload();
});