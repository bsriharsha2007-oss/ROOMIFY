/**
 * ROOMIFY Furniture Catalog (INR) & Procedural 3D Mesh Generator
 */
const RoomifyFurniture = {
    CATALOG: [
        { sku: 'BED-KING-01', category: 'beds', categoryLabel: 'Beds', name: 'Nordic King Platform Bed', type: 'bed', width: 2.00, height: 1.05, depth: 2.15, price: 38999, color: '#C8B6A6', material: 'fabric', icon: 'fa-bed', colors: ['#C8B6A6','#4A5568','#EAE0D5','#3D352E'] },
        { sku: 'BED-QUN-02', category: 'beds', categoryLabel: 'Beds', name: 'Teakwood Queen Bed', type: 'bed', width: 1.65, height: 1.00, depth: 2.05, price: 29499, color: '#6F4E37', material: 'wood', icon: 'fa-bed', colors: ['#6F4E37','#8D6E63','#3E2723','#D7CCC8'] },
        { sku: 'SOFA-3S-01', category: 'sofas', categoryLabel: 'Sofas', name: 'Milano 3-Seater Sofa', type: 'sofa', width: 2.10, height: 0.88, depth: 0.94, price: 44999, color: '#5C4B3E', material: 'fabric', icon: 'fa-couch', colors: ['#5C4B3E','#2D3748','#CBD5E0','#1E40AF','#9B2C2C'] },
        { sku: 'SOFA-LSH-02', category: 'sofas', categoryLabel: 'Sofas', name: 'Oslo Lounge Loveseat', type: 'sofa', width: 1.55, height: 0.85, depth: 0.88, price: 28500, color: '#64748B', material: 'fabric', icon: 'fa-couch', colors: ['#64748B','#D6C7B2','#334155','#0F766E'] },
        { sku: 'CHR-ACC-01', category: 'chairs', categoryLabel: 'Chairs', name: 'Scandi Lounge Accent Chair', type: 'chair', width: 0.76, height: 0.82, depth: 0.78, price: 12499, color: '#D97757', material: 'fabric', icon: 'fa-chair', colors: ['#D97757','#2B6CB0','#4A5568','#E2E8F0'] },
        { sku: 'CHR-OFF-02', category: 'chairs', categoryLabel: 'Chairs', name: 'Ergo Study Task Chair', type: 'chair', width: 0.62, height: 0.95, depth: 0.62, price: 9499, color: '#1E293B', material: 'leather', icon: 'fa-chair', colors: ['#1E293B','#475569','#94A3B8'] },
        { sku: 'TBL-COF-01', category: 'tables', categoryLabel: 'Tables', name: 'Marble Top Coffee Table', type: 'table', width: 1.15, height: 0.42, depth: 0.65, price: 11999, color: '#F1F5F9', material: 'marble', icon: 'fa-table', colors: ['#F1F5F9','#334155','#8B5A2B','#1E293B'] },
        { sku: 'TBL-SID-02', category: 'tables', categoryLabel: 'Tables', name: 'Oak Bedside Nightstand', type: 'table', width: 0.50, height: 0.55, depth: 0.44, price: 5499, color: '#A47551', material: 'wood', icon: 'fa-table', colors: ['#A47551','#F8FAFC','#3E2723'] },
        { sku: 'WRD-3DR-01', category: 'wardrobes', categoryLabel: 'Wardrobes', name: 'Ivory 3-Door Wardrobe', type: 'wardrobe', width: 1.60, height: 2.10, depth: 0.60, price: 36999, color: '#F5F2EB', material: 'wood', icon: 'fa-door-closed', colors: ['#F5F2EB','#8D6E63','#334155','#CBD5E1'] },
        { sku: 'CAB-KCH-01', category: 'cabinets', categoryLabel: 'Cabinets', name: 'Sage Modular Kitchen Counter', type: 'cabinet', width: 1.80, height: 0.90, depth: 0.65, price: 32500, color: '#5E9C76', material: 'wood', icon: 'fa-box-archive', colors: ['#5E9C76','#F8FAFC','#334155','#92400E'] },
        { sku: 'DSK-STD-01', category: 'desks', categoryLabel: 'Desks', name: 'Minimalist Work & Study Desk', type: 'desk', width: 1.40, height: 0.76, depth: 0.70, price: 14999, color: '#9C6F44', material: 'wood', icon: 'fa-desktop', colors: ['#9C6F44','#F8FAFC','#1E293B'] },
        { sku: 'BSH-TLL-01', category: 'bookshelves', categoryLabel: 'Bookshelves', name: '5-Tier Open Bookshelf', type: 'bookshelf', width: 0.90, height: 1.85, depth: 0.36, price: 13499, color: '#7C583A', material: 'wood', icon: 'fa-book', colors: ['#7C583A','#1E293B','#F1F5F9'] },
        { sku: 'TVU-CON-01', category: 'tv_units', categoryLabel: 'TV Units', name: 'Floating Media Console & TV', type: 'tv_unit', width: 1.75, height: 1.15, depth: 0.45, price: 19999, color: '#F8FAFC', material: 'wood', icon: 'fa-tv', colors: ['#F8FAFC','#5C4033','#1E293B'] },
        { sku: 'DIN-6ST-01', category: 'dining_tables', categoryLabel: 'Dining Tables', name: '6-Seater Teak Dining Set', type: 'dining_table', width: 1.80, height: 0.78, depth: 0.95, price: 39500, color: '#7B5233', material: 'wood', icon: 'fa-utensils', colors: ['#7B5233','#F1F5F9','#3E2723'] },
        { sku: 'LMP-FLR-01', category: 'lamps', categoryLabel: 'Lamps', name: 'Arc Brass Floor Lamp', type: 'floor_lamp', width: 0.45, height: 1.65, depth: 0.45, price: 6499, color: '#D4AF37', material: 'metal', icon: 'fa-lightbulb', colors: ['#D4AF37','#1E293B','#F8FAFC'] },
        { sku: 'LMP-TBL-02', category: 'lamps', categoryLabel: 'Lamps', name: 'Modern Table Lamp', type: 'table_lamp', width: 0.30, height: 0.55, depth: 0.30, price: 3999, color: '#1E293B', material: 'metal', icon: 'fa-lightbulb', colors: ['#1E293B','#F8FAFC','#D97757'] },
        { sku: 'DEC-PLT-01', category: 'decor', categoryLabel: 'Decor', name: 'Potted Indoor Plant', type: 'plant', width: 0.42, height: 1.10, depth: 0.42, price: 4999, color: '#2F855A', material: 'wood', icon: 'fa-leaf', colors: ['#2F855A','#4A5568','#F8FAFC'] },
        { sku: 'DEC-RUG-02', category: 'decor', categoryLabel: 'Decor', name: 'Soft Area Rug', type: 'rug', width: 2.40, height: 0.04, depth: 1.60, price: 8999, color: '#3B5998', material: 'fabric', icon: 'fa-rug', colors: ['#3B5998','#D6C7B2','#64748B'] }
    ],

    getBySku(sku) {
        return this.CATALOG.find(item => item.sku === sku);
    },

    buildMesh(item, state = {}) {
        if (!item) {
            throw new TypeError('A furniture catalog item is required to build its mesh.');
        }

        const color = state.color || item.color;
        const material = state.material || item.material;
        const geometry = new THREE.BoxGeometry(item.width, item.height, item.depth);
        geometry.translate(0, item.height / 2, 0);
        const mesh = new THREE.Mesh(
            geometry,
            new THREE.MeshStandardMaterial({
                color,
                roughness: material === 'metal' ? 0.35 : 0.75,
                metalness: material === 'metal' ? 0.65 : 0
            })
        );

        mesh.position.set(
            state.x === undefined ? 0 : state.x,
            state.y === undefined ? 0 : state.y,
            state.z === undefined ? 0 : state.z
        );
        mesh.rotation.y = state.rotY || 0;
        mesh.scale.setScalar(state.scale === undefined ? 1 : state.scale);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        mesh.userData = {
            isRoomifyFurniture: true,
            uid: state.uid || `furniture-${Date.now()}-${Math.random().toString(36).slice(2)}`,
            sku: item.sku,
            name: item.name,
            category: item.category,
            categoryLabel: item.categoryLabel,
            price: item.price,
            baseWidth: item.width,
            baseHeight: item.height,
            baseDepth: item.depth,
            color,
            material
        };

        return mesh;
    }
};