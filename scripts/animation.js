animations=document.querySelectorAll(".anim")
bars=document.querySelectorAll(".progress")
obsover=new IntersectionObserver(function(entries){
    entries.forEach(entry=>{
        entry.target.classList.toggle('show',entry.isIntersecting)
        if(entry.isIntersecting){
            obsover.unobserve(entry.target);
        }
    })
},{
    threshold:0.7
})
obsjs=new IntersectionObserver(function(entries){
    entries.forEach(entry=>{
        entry.target.classList.toggle('filljs',entry.isIntersecting)
        if(entry.isIntersecting){
            obsjs.unobserve(entry.target)
        }
    })
},{
    threshold:0
})
obscpp=new IntersectionObserver(function(entries){
    entries.forEach(entry=>{
        entry.target.classList.toggle('fillcpp',entry.isIntersecting)
        if(entry.isIntersecting){
            obscpp.unobserve(entry.target)
        }
    })
},{
    threshold:0
})
obsgit=new IntersectionObserver(function(entries){
    entries.forEach(entry=>{
        entry.target.classList.toggle('fillgit',entry.isIntersecting)
        if(entry.isIntersecting){
            obsgit.unobserve(entry.target)
        }
    })
},{
    threshold:0
})
obscp=new IntersectionObserver(function(entries){
    entries.forEach(entry=>{
        entry.target.classList.toggle('fillcp',entry.isIntersecting)
        if(entry.isIntersecting){
            obscp.unobserve(entry.target)
        }
    })
},{
    threshold:0
})
obspy=new IntersectionObserver(function(entries){
    entries.forEach(entry=>{
        entry.target.classList.toggle('fillpy',entry.isIntersecting)
        if(entry.isIntersecting){
            obspy.unobserve(entry.target)
        }
    })
},{
    threshold:0
})
obsjs.observe(bars[0])
obscpp.observe(bars[1])
obsgit.observe(bars[2])
obscp.observe(bars[3])
obspy.observe(bars[4])
animations.forEach(animation => {
    obsover.observe(animation)
});