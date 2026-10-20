import postcss from 'postcss';
export function tokenCatalogue(source) {
 const root=postcss.parse(source),light={},dark={},responsive=[];
 root.walkRules(rule=>{
  if(rule.parent.type==='atrule') { responsive.push({condition:rule.parent.params,tokens:rule.nodes.filter(n=>n.type==='decl').map(n=>n.prop)}); return; }
  for(const decl of rule.nodes.filter(n=>n.type==='decl')) {
   if(rule.selector.includes(':root'))light[decl.prop]=decl.value;
   if(rule.selector.includes('.dark'))dark[decl.prop]=decl.value;
  }
 });
 const resolve=(name,definitions,chain=[])=>{
  if(chain.includes(name))throw new Error(`Circular token: ${name}`);
  if(!(name in definitions))throw new Error(`Undefined token: ${name}`);
  return definitions[name].replace(/var\((--[\w-]+)\)/g,(_,other)=>resolve(other,definitions,[...chain,name]));
 };
 const definitions={...light,...dark};
 const tokens=Object.entries(light).map(([name,value])=>({name,value,light:resolve(name,light),dark:resolve(name,definitions)}));
 const typeRoles=tokens.filter(t=>/^--type-.+-family$/.test(t.name)).map(t=>t.name.slice(7,-7));
 return {tokens,typeRoles,responsive};
}
