// =========================================================================
// CONFIGURAÇÃO DA API DO GOOGLE SHEETS
// =========================================================================
const URL_GOOGLE_SHEETS = "https://script.google.com/macros/s/AKfycbw_7gmRb1n9N1xD0vbTHO1xANsXu6cIu3xeeoZIqefH2hyXBZFVIkQruixbd-W6hqPHtQ/exec"; 

// Variáveis de Controle de Estado Global
let abaAtual = 'mercadolivre';
let categoriaAtiva = 'todas';

// =========================================================================
// BASE DE DADOS COMPLETA DOS PRODUTOS POR PLATAFORMA
// =========================================================================
const baseProdutos = {
// 1. MERCADO LIVRE (35 Produtos no Total)
  mercadolivre: [
    {
      titulo: "Creatina Monohidratada Pura 1kg Dark Lab Unidade Sem sabor",
      vendedor: "Por Dark Lab",
      categoria: "Saúde & Fitness",
      avaliacao: "4.9",
      vendas: "+10mil vendidos",
      precoOriginal: "",
      precoPromocional: "Consulte o Preço Atualizado",
      desconto: "56% OFF",
      destaque: "R$ 20 OFF com Cupom",
      imagem: "assents/mercado_livre_files/creatina.jpeg",
      link: "https://meli.la/2RGGEut",
      tags: ["Chegará amanhã FULL", "Compra Garantida"]
    },
    {
      titulo: "Kit 10 Calcinhas Fio Dental Microfibra Premium Sortidas Liso M 40-42",
      vendedor: "Por LUH23 MODA INTIMA",
      categoria: "Moda & Acessórios",
      avaliacao: "4.8",
      vendas: "+5mil vendidos",
      precoOriginal: "",
      precoPromocional: "Consulte o Preço Atualizado",
      desconto: "25% OFF",
      destaque: "",
      imagem: "assents/mercado_livre_files/kit calcinha.jpeg",
      link: "https://meli.la/2vr8bot",
      tags: ["Frete grátis FULL", "Compra Garantida"]
    },
    {
      titulo: "Calibrador De Ar Digital Para Pneu Portátil Compressor Usb",
      vendedor: "Mais Vendido",
      categoria: "Automotivo & Ferramentas",
      avaliacao: "4.7",
      vendas: "+10mil vendidos",
      precoOriginal: "",
      precoPromocional: "Consulte o Preço Atualizado",
      desconto: "5% OFF",
      destaque: "",
      imagem: "assents/mercado_livre_files/compressor.jpeg",
      link: "https://meli.la/2YWv7Fb",
      tags: ["Carro, Moto e Bike", "Compra Garantida"]
    },
    {
      titulo: "Kit Principia para Rotina de Skincare Pele Sensível",
      vendedor: "Mais Vendido",
      categoria: "Beleza & Estética",
      avaliacao: "4.9",
      vendas: "+10mil vendidos",
      precoOriginal: "",
      precoPromocional: "Consulte o Preço Atualizado",
      desconto: "43% OFF no Pix",
      destaque: "",
      imagem: "assents/mercado_livre_files/kit_neutrodina.jpeg",
      link: "https://meli.la/2E5Qr5a",
      tags: ["Proteção FPS 60", "Compra Garantida"]
    },
    {
      titulo: "Capa Colchão Queen Padrão Impermeável Antialérgico Protetor",
      vendedor: "Mais Vendido",
      categoria: "Casa & Utilidades",
      avaliacao: "4.8",
      vendas: "+50mil vendidos",
      precoOriginal: "",
      precoPromocional: "Consulte o Preço Atualizado",
      desconto: "49% OFF",
      destaque: "",
      imagem: "assents/mercado_livre_files/capa_para_colchao.jpeg",
      link: "https://meli.la/13BXz83",
      tags: ["100% Impermeável", "Compra Garantida"]
    },
    {
      titulo: "Carregador Turbo 40w Compatível Com iPhone USB",
      vendedor: "Mais Vendido",
      categoria: "Tecnologia & Gadgets",
      avaliacao: "4.8",
      vendas: "+50mil vendidos",
      precoOriginal: "",
      precoPromocional: "Consulte o Preço Atualizado",
      desconto: "58% OFF",
      destaque: "",
      imagem: "assents/mercado_livre_files/carregador_ultra.jpeg",
      link: "https://meli.la/2i4Gk8r",
      tags: ["Carga Ultra Rápida", "Compra Garantida"]
    },
    {
      titulo: "Kit Com 10 Cuecas Boxer Masculina Microfibra Original",
      vendedor: "Mais Vendido",
      categoria: "Moda & Acessórios",
      avaliacao: "4.7",
      vendas: "+100mil vendidos",
      precoOriginal: "",
      precoPromocional: "Consulte o Preço Atualizado",
      desconto: "42% OFF",
      destaque: "",
      imagem: "assents/mercado_livre_files/kit_cueca.jpeg",
      link: "https://meli.la/1E5txSM",
      tags: ["Microfibra Premium", "Compra Garantida"]
    },
    {
      titulo: "Ar Condicionado Consul Split Inverter 12000btus Cor Branco",
      vendedor: "Oferta Imperdível",
      categoria: "Casa & Utilidades",
      avaliacao: "5.0",
      vendas: "+100 vendidos",
      precoOriginal: "",
      precoPromocional: "Consulte o Preço Atualizado",
      desconto: "66% OFF no Pix",
      destaque: "Economia de Energia",
      imagem: "assents/mercado_livre_files/ar_condicionado.png",
      link: "https://meli.la/28Z6oTY",
      tags: ["Consul Split Inverter", "12.000 BTUs"]
    },
    {
      titulo: "Armani Beauty Perfume Masculino Acqua Di Giò Eau de Toilette 100ml",
      vendedor: "Mais Vendido",
      categoria: "Beleza & Estética",
      avaliacao: "4.7",
      vendas: "+1000 vendidos",
      precoOriginal: "",
      precoPromocional: "Consulte o Preço Atualizado",
      desconto: "45% OFF",
      destaque: "Opção em até 12x",
      imagem: "assents/mercado_livre_files/perfume_acqua_de_gio.png",
      link: "https://meli.la/2iS9XzL",
      tags: ["Perfume Importado", "Fragrância Marcante"]
    },
    {
      titulo: "Kit 10 Calcinha Infantil Algodão Tradicional Menina Atacado",
      vendedor: "Mais Vendido",
      categoria: "Moda & Acessórios",
      avaliacao: "4.7",
      vendas: "+10mil vendidos",
      precoOriginal: "",
      precoPromocional: "Consulte o Preço Atualizado",
      desconto: "11% OFF",
      destaque: "Kit Atacado",
      imagem: "assents/mercado_livre_files/kit_calcinhas_infantil.png",
      link: "https://meli.la/21QuJix",
      tags: ["100% Algodão", "Conforto Infantil"]
    },
    {
      titulo: "Perfume Árabe - Lattafa Yara - Perfume Feminino Edp 100ml",
      vendedor: "Mais Buscado",
      categoria: "Beleza & Estética",
      avaliacao: "4.8",
      vendas: "+500 vendidos",
      precoOriginal: "",
      precoPromocional: "Consulte o Preço Atualizado",
      desconto: "45% OFF",
      destaque: "Opção em até 12x",
      imagem: "assents/mercado_livre_files/perfume_lattafa_yara.png",
      link: "https://meli.la/1hk5bjE",
      tags: ["Perfume Árabe Lattafa", "Fixação Intensa"]
    },
    {
      titulo: "Central Multimídia First Option 7810h Com Espelhamento E Bluetooth",
      vendedor: "Mais Vendido",
      categoria: "Automotivo & Ferramentas",
      avaliacao: "4.5",
      vendas: "+10mil vendidos",
      precoOriginal: "",
      precoPromocional: "Consulte o Preço Atualizado",
      desconto: "5% OFF no Pix",
      destaque: "Espelhamento Android/iOS",
      imagem: "assents/mercado_livre_files/mutimidia_option_7810h.png",
      link: "https://meli.la/2we6JN1",
      tags: ["Tela Touchscreen", "Bluetooth & USB"]
    },
    {
      titulo: "Coturno Militar De Segurança Bota Adventure Zíper Premium",
      vendedor: "Mais Vendido",
      categoria: "Moda & Acessórios",
      avaliacao: "4.8",
      vendas: "+5mil vendidos",
      precoOriginal: "",
      precoPromocional: "Consulte o Preço Atualizado",
      desconto: "36% OFF",
      destaque: "Opção Sem Juros",
      imagem: "assents/mercado_livre_files/coturno_militar.png",
      link: "https://meli.la/1SDLnJw",
      tags: ["Couro Resistente", "Zíper Lateral"]
    },
    {
      titulo: "Perfume Masculino Azzaro Wanted Edt 100ml",
      vendedor: "Mais Vendido",
      categoria: "Beleza & Estética",
      avaliacao: "4.8",
      vendas: "+10mil vendidos",
      precoOriginal: "",
      precoPromocional: "Consulte o Preço Atualizado",
      desconto: "Frete Grátis",
      destaque: "Opção em até 12x",
      imagem: "assents/mercado_livre_files/perfume_masculino_azzaro.png",
      link: "https://meli.la/2Y1db8p",
      tags: ["Azzaro Original", "Fragrância Premium"]
    },
    {
      titulo: "Kit 4 Camisetas Masculinas Dry Lobo Alpha",
      vendedor: "Mais Buscado",
      categoria: "Moda & Acessórios",
      avaliacao: "4.8",
      vendas: "+1000 vendidos",
      precoOriginal: "",
      precoPromocional: "Consulte o Preço Atualizado",
      desconto: "Kit com 4",
      destaque: "Opção em até 12x",
      imagem: "assents/mercado_livre_files/kit_4camisetas_masculinas.png",
      link: "https://meli.la/2tXy8Qb",
      tags: ["Tecnologia DryFit", "Ideal para Treino"]
    },
    {
      titulo: "Chinelo Havaianas Simpsons Top Original Masculino Feminino",
      vendedor: "Oferta Imperdível",
      categoria: "Moda & Acessórios",
      avaliacao: "4.9",
      vendas: "+10mil vendidos",
      precoOriginal: "",
      precoPromocional: "Consulte o Preço Atualizado",
      desconto: "41% OFF",
      destaque: "Edição Especial",
      imagem: "assents/mercado_livre_files/havaianas_simpsons.png",
      link: "https://meli.la/31S9DUP",
      tags: ["Havaianas Simpsons", "Original"]
    },
    {
      titulo: "Bolsa Feminina Transversal e Alça De Mão E Selten Cor Preto",
      vendedor: "Mais Vendido",
      categoria: "Moda & Acessórios",
      avaliacao: "4.8",
      vendas: "+5mil vendidos",
      precoOriginal: "",
      precoPromocional: "Consulte o Preço Atualizado",
      desconto: "26% OFF",
      destaque: "Selten Original",
      imagem: "assents/mercado_livre_files/bolsa_feminina.png",
      link: "https://meli.la/32SjbFA",
      tags: ["Com Alça Transversal", "Design Elegante"]
    },
    {
      titulo: "Balança Digital Corporal Bioimpedância Aplicativo Bluetooth Relaxmedic",
      vendedor: "Mais Vendido",
      categoria: "Saúde & Fitness",
      avaliacao: "4.9",
      vendas: "+100mil vendidos",
      precoOriginal: "",
      precoPromocional: "Consulte o Preço Atualizado",
      desconto: "60% OFF",
      destaque: "App Conectado",
      imagem: "assents/mercado_livre_files/balanca_digital.png",
      link: "https://meli.la/1a4HhKG",
      tags: ["Medição de Gordura", "Bluetooth Sync"]
    },
    {
      titulo: "Britânia Escova Secadora Bec02pr 4 Em 1 1300w Cor Preto e Rosa",
      vendedor: "Mais Vendido",
      categoria: "Beleza & Estética",
      avaliacao: "4.8",
      vendas: "+100mil vendidos",
      precoOriginal: "",
      precoPromocional: "Consulte o Preço Atualizado",
      desconto: "35% OFF",
      destaque: "4 em 1 - 1300W",
      imagem: "assents/mercado_livre_files/escova_secadora.png",
      link: "https://meli.la/2QQgm6T",
      tags: ["Seca, Escova e Modela", "Britânia Original"]
    },
    {
      titulo: "Kit Hidratação Facial + Olhos Anti Sinais - Kokeshi Milagre Do Arroz",
      vendedor: "Mais Vendido",
      categoria: "Beleza & Estética",
      avaliacao: "4.8",
      vendas: "+10mil vendidos",
      precoOriginal: "",
      precoPromocional: "Consulte o Preço Atualizado",
      desconto: "19% OFF",
      destaque: "Tratamento Completo",
      imagem: "assents/mercado_livre_files/kit_hidratacao_facial.png",
      link: "https://meli.la/1md1sQ7",
      tags: ["Pele de Porcelana", "Anti-Sinais"]
    },
    {
      titulo: "Conjunto Fitness Virginia Top Shorts Meia Coxa Cintura Alta",
      vendedor: "Mais Vendido",
      categoria: "Saúde & Fitness",
      avaliacao: "4.5",
      vendas: "+100mil vendidos",
      precoOriginal: "",
      precoPromocional: "Consulte o Preço Atualizado",
      desconto: "50% OFF",
      destaque: "Cintura Alta Modeladora",
      imagem: "assents/mercado_livre_files/conjunto_fitness_virginia.png",
      link: "https://meli.la/14Wa8c8",
      tags: ["Tecido Suplex", "Não Fica Transparente"]
    },
    {
      titulo: "Calça Legging Leg Flare Zero Transparência Grossa Academia",
      vendedor: "Mais Vendido",
      categoria: "Saúde & Fitness",
      avaliacao: "4.7",
      vendas: "+50mil vendidos",
      precoOriginal: "",
      precoPromocional: "Consulte o Preço Atualizado",
      desconto: "Tecido Encorpado",
      destaque: "Corte Flare",
      imagem: "assents/mercado_livre_files/calca_legging.png",
      link: "https://meli.la/1bKa9QP",
      tags: ["Zero Transparência", "Modelagem Perfeita"]
    },
    {
      titulo: "Kit 3 Conjunto Top Shorts Feminino Los Angeles Fitness",
      vendedor: "Mais Compartilhado",
      categoria: "Saúde & Fitness",
      avaliacao: "4.7",
      vendas: "+5mil vendidos",
      precoOriginal: "",
      precoPromocional: "Consulte o Preço Atualizado",
      desconto: "20% OFF",
      destaque: "Kit com 3 Conjuntos",
      imagem: "assents/mercado_livre_files/kit_3conjuntos_top_shorts.png",
      link: "https://meli.la/18it4jR",
      tags: ["Cores Sortidas", "Excelente Custo Benefício"]
    },
    {
      titulo: "Tênis Puma Caven Corrida Caminhada Macio Treino Oferta",
      vendedor: "Oferta Imperdível",
      categoria: "Moda & Acessórios",
      avaliacao: "4.9",
      vendas: "+100 vendidos",
      precoOriginal: "",
      precoPromocional: "Consulte o Preço Atualizado",
      desconto: "70% OFF",
      destaque: "Puma Caven",
      imagem: "assents/mercado_livre_files/tenis_puma_macio.png",
      link: "https://meli.la/2LYSLyK",
      tags: ["Conforto & Estilo", "Puma Original"]
    },
    {
      titulo: "Cinta Modeladora Feminina Com Barbatana Redutora Cintura 750",
      vendedor: "Mais Vendido",
      categoria: "Beleza & Estética",
      avaliacao: "4.6",
      vendas: "+50mil vendidos",
      precoOriginal: "",
      precoPromocional: "Consulte o Preço Atualizado",
      desconto: "43% OFF",
      destaque: "Opção Sem Juros",
      imagem: "assents/mercado_livre_files/cinta_seladora.png",
      link: "https://meli.la/2Ho8WjW",
      tags: ["Com Barbatanas", "Redução de Medidas"]
    },
    {
      titulo: "Lavadora De Alta Pressão A Bateria Portátil Sem Fio Com Maleta",
      vendedor: "Mais Vendido",
      categoria: "Automotivo & Ferramentas",
      avaliacao: "4.7",
      vendas: "+5mil vendidos",
      precoOriginal: "",
      precoPromocional: "Consulte o Preço Atualizado",
      desconto: "35% OFF",
      destaque: "Bateria Recarregável",
      imagem: "assents/mercado_livre_files/lavadora_pressao.png",
      link: "https://meli.la/1tyGwnK",
      tags: ["Sem Fio", "Acompanha Maleta"]
    },
    {
      titulo: "Kit Body Spray Masculino Perfumado Primacial 3 Unidades",
      vendedor: "Mais Buscado",
      categoria: "Beleza & Estética",
      avaliacao: "4.8",
      vendas: "+1mil vendidos",
      precoOriginal: "",
      precoPromocional: "Consulte o Preço Atualizado",
      desconto: "Oferta Especial",
      destaque: "Fragrâncias Marcantes",
      imagem: "assents/mercado_livre_files/kit_boresprash.png",
      link: "https://meli.la/2HvEmtK",
      tags: ["Kit com 3", "Perfumaria Masculina"]
    },
    {
      titulo: "Kit 6 Cuecas Boxer Masculina Lupo Sem Costura Microfibra",
      vendedor: "Mais Vendido",
      categoria: "Moda & Acessórios",
      avaliacao: "4.9",
      vendas: "+50mil vendidos",
      precoOriginal: "",
      precoPromocional: "Consulte o Preço Atualizado",
      desconto: "Kit Atacado",
      destaque: "Lupo Original",
      imagem: "assents/mercado_livre_files/kit6_cuecas_sem_costura.png",
      link: "https://meli.la/2HJYkKB",
      tags: ["Sem Costura", "Conforto Diário"]
    },
    {
      titulo: "Kit Tratamento Capilar Braé Stages Nutrition Completo",
      vendedor: "Mais Vendido",
      categoria: "Beleza & Estética",
      avaliacao: "4.9",
      vendas: "+10mil vendidos",
      precoOriginal: "",
      precoPromocional: "Consulte o Preço Atualizado",
      desconto: "Nutrição Intensa",
      destaque: "Linha Profissional",
      imagem: "assents/mercado_livre_files/kit_de_higiene.png",
      link: "https://meli.la/1rdSFMD",
      tags: ["Shampoo + Máscara", "Braé Original"]
    },
    {
      titulo: "Panela De Pressão Elétrica WAP 6 Litros Digital Inox",
      vendedor: "Oferta Imperdível",
      categoria: "Casa & Utilidades",
      avaliacao: "4.8",
      vendas: "+5mil vendidos",
      precoOriginal: "",
      precoPromocional: "Consulte o Preço Atualizado",
      desconto: "6 Litros",
      destaque: "Painel Digital",
      imagem: "assents/mercado_livre_files/fritadeira6L.png",
      link: "https://meli.la/1K4Y33G",
      tags: ["Segurança Total", "Capacidade 6L"]
    },
    {
      titulo: "Fritadeira Air Fryer Oven Mondial Digital Com Porta De Vidro",
      vendedor: "Mais Vendido",
      categoria: "Casa & Utilidades",
      avaliacao: "4.9",
      vendas: "+20mil vendidos",
      precoOriginal: "",
      precoPromocional: "Consulte o Preço Atualizado",
      desconto: "Design Oven",
      destaque: "Mondial Original",
      imagem: "assents/mercado_livre_files/fritadeira_com_automatico.png",
      link: "https://meli.la/2E7mMRQ",
      tags: ["Painel Touch", "Forno & Air Fryer"]
    },
    {
      titulo: "Varal De Chão Com Abas Dobrável Alumínio E Aço",
      vendedor: "Mais Vendido",
      categoria: "Casa & Utilidades",
      avaliacao: "4.7",
      vendas: "+30mil vendidos",
      precoOriginal: "",
      precoPromocional: "Consulte o Preço Atualizado",
      desconto: "Resistente",
      destaque: "Fácil de Guardar",
      imagem: "assents/mercado_livre_files/varal_de_roupa.png",
      link: "https://meli.la/2K7nCUc",
      tags: ["Dobrável", "Com Abas"]
    },
    {
      titulo: "Cooktop 4 Bocas Chamalux A Gás Vidro Temperado Preto",
      vendedor: "Mais Vendido",
      categoria: "Casa & Utilidades",
      avaliacao: "4.8",
      vendas: "+15mil vendidos",
      precoOriginal: "",
      precoPromocional: "Consulte o Preço Atualizado",
      desconto: "Chamalux",
      destaque: "Acendimento Automático",
      imagem: "assents/mercado_livre_files/cooktop.png",
      link: "https://meli.la/2jeqCgL",
      tags: ["Bivolt", "Vidro Temperado"]
    },
    {
      titulo: "Carrinho De Mão Industrial Para Carga Rodas Com Pneu",
      vendedor: "Mais Vendido",
      categoria: "Automotivo & Ferramentas",
      avaliacao: "4.8",
      vendas: "+10mil vendidos",
      precoOriginal: "",
      precoPromocional: "Consulte o Preço Atualizado",
      desconto: "Carga Pesada",
      destaque: "Estrutura Reforçada",
      imagem: "assents/mercado_livre_files/carro_apoio.png",
      link: "https://meli.la/2LMtpWz",
      tags: ["Pneu com Câmara", "Até 200kg"]
    },
    {
      titulo: "Lavadora De Alta Pressão Kärcher Profissional Amarela",
      vendedor: "Mais Vendido",
      categoria: "Automotivo & Ferramentas",
      avaliacao: "4.9",
      vendas: "+25mil vendidos",
      precoOriginal: "",
      precoPromocional: "Consulte o Preço Atualizado",
      desconto: "Kärcher Original",
      destaque: "Alta Performance",
      imagem: "assents/mercado_livre_files/lavadora_carro.png",
      link: "https://meli.la/2kbmNvd",
      tags: ["Economia de Água", "Jato Regulável"]
    }
  ],

  // 2. KIWIFY (19 Produtos - 14 Originais + 5 Novos com Sales Pages)
  kiwify: [
    {
      titulo: "Esmaltação em Gel - Curso Completo",
      vendedor: "Kiwify Infoproduto",
      categoria: "Beleza & Estética",
      avaliacao: "4.9",
      vendas: "+2.500 alunas",
      precoOriginal: "",
      precoPromocional: "Consulte a Oferta Atualizada",
      desconto: "Inscrições Abertas",
      destaque: "Com Certificado",
      imagem: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=500&q=80",
      link: "https://kiwify.app/rcxl5mC?afid=IsuFpjs6",
      tags: ["Técnica Passo a Passo", "Acesso Imediato"]
    },
    {
      titulo: "Curso de Afiliados - Plano Especial",
      vendedor: "Kiwify Treinamento",
      categoria: "Negócios & Mídia",
      avaliacao: "4.9",
      vendas: "+4.100 alunos",
      precoOriginal: "",
      precoPromocional: "Consulte a Oferta Atualizada",
      desconto: "Oferta Exclusiva",
      destaque: "Aulas Práticas",
      imagem: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&q=80",
      link: "https://kiwify.app/u3digrT?afid=aemZNB40",
      tags: ["Estratégia Validada", "Garantia 7 Dias"]
    },
    {
      titulo: "Formação Essência dos Negócios",
      vendedor: "Kiwify Treinamento",
      categoria: "Negócios & Mídia",
      avaliacao: "5.0",
      vendas: "+890 alunos",
      precoOriginal: "",
      precoPromocional: "Consulte a Oferta Atualizada",
      desconto: "Formação Completa",
      destaque: "Suporte VIP",
      imagem: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80",
      link: "https://kiwify.app/thrbU6J?afid=jDvIKDnt",
      tags: ["Mentoria Estruturada", "Acesso Vitalício"]
    },
    {
      titulo: "Competência Administrativa & Gestão",
      vendedor: "Kiwify Infoproduto",
      categoria: "Educação & Cursos",
      avaliacao: "4.8",
      vendas: "+1.800 alunos",
      precoOriginal: "",
      precoPromocional: "Consulte a Oferta Atualizada",
      desconto: "Promoção",
      destaque: "Para Carreiras",
      imagem: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80",
      link: "https://kiwify.app/rTLthQL?afid=JuDsjfXJ",
      tags: ["Certificado de Conclusão", "Garantia 7 Dias"]
    },
    {
      titulo: "Sistema de Disparos de Mensagens Automáticas",
      vendedor: "Kiwify Software",
      categoria: "Tecnologia & Gadgets",
      avaliacao: "4.8",
      vendas: "+3.100 licenças",
      precoOriginal: "",
      precoPromocional: "Consulte a Oferta Atualizada",
      desconto: "Pacote de Envio",
      destaque: "Automação",
      imagem: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80",
      link: "https://kiwify.app/Gq6AqCZ?afid=wKwwqghL",
      tags: ["Software/Ferramenta", "Acesso Imediato"]
    },
    {
      titulo: "Manutenção de Software - Treinamento Especializado",
      vendedor: "Kiwify Infoproduto",
      categoria: "Tecnologia & Gadgets",
      avaliacao: "4.9",
      vendas: "+1.200 alunos",
      precoOriginal: "",
      precoPromocional: "Consulte a Oferta Atualizada",
      desconto: "Acesso Imediato",
      destaque: "Inscrições Abertas",
      imagem: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=500&q=80",
      link: "https://kiwify.app/iDfbTcm?afid=jCoaqlbT",
      tags: ["Treinamento Prático", "Garantia 7 Dias"]
    },
    {
      titulo: "Prova Decifrada - Método Ideal para Concurseiros",
      vendedor: "Kiwify Infoproduto",
      categoria: "Educação & Cursos",
      avaliacao: "5.0",
      vendas: "+3.400 alunos",
      precoOriginal: "",
      precoPromocional: "Consulte a Oferta Atualizada",
      desconto: "Oferta Especial",
      destaque: "Material Focado",
      imagem: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=500&q=80",
      link: "https://pay.kiwify.com.br/bSZ3JFq?afid=hn4uSoMK",
      tags: ["Para Concursos", "Download/Acesso Imediato"]
    },
    {
      titulo: "21 Dias de Oração pela Família e Restauração",
      vendedor: "Kiwify E-book",
      categoria: "Desenvolvimento Pessoal",
      avaliacao: "4.9",
      vendas: "+8.500 leitores",
      precoOriginal: "",
      precoPromocional: "Consulte a Oferta Atualizada",
      desconto: "40% OFF",
      destaque: "Guia Digital",
      imagem: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=500&q=80",
      link: "https://pay.kiwify.com.br/fzrKAu7?afid=WLhg14uq",
      tags: ["Leitura Digital", "Acesso Imediato"]
    },
    {
      titulo: "Treinamento Completo de Vendas & Mídia",
      vendedor: "Kiwify Infoproduto",
      categoria: "Negócios & Mídia",
      avaliacao: "4.8",
      vendas: "+950 alunos",
      precoOriginal: "",
      precoPromocional: "Consulte a Oferta Atualizada",
      desconto: "Formação Completa",
      destaque: "Com Suporte",
      imagem: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80",
      link: "https://pay.kiwify.com.br/4KQCJIS?afid=7vsfCawu",
      tags: ["Curso Estruturado", "Garantia 7 Dias"]
    },
    {
      titulo: "Manual Prático da Bíblia",
      vendedor: "Kiwify E-book",
      categoria: "Desenvolvimento Pessoal",
      avaliacao: "4.9",
      vendas: "+4.100 leitores",
      precoOriginal: "",
      precoPromocional: "Consulte a Oferta Atualizada",
      desconto: "33% OFF",
      destaque: "Conteúdo Exclusivo",
      imagem: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=500&q=80",
      link: "https://pay.kiwify.com.br/bBAoBrp?afid=stCvcVaQ",
      tags: ["Material em PDF", "Acesso Imediato"]
    },
    {
      titulo: "Lista de Fornecedores Oficiais + E-books Bônus",
      vendedor: "Kiwify Infoproduto",
      categoria: "Negócios & Mídia",
      avaliacao: "4.9",
      vendas: "+12.000 acessos",
      precoOriginal: "",
      precoPromocional: "Consulte a Oferta Atualizada",
      desconto: "60% OFF",
      destaque: "Contatos Validados",
      imagem: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=500&q=80",
      link: "https://pay.kiwify.com.br/d0JymVP?afid=wb5Q23ut",
      tags: ["Lista de Fornecedores", "Download Imediato"]
    },
    {
      titulo: "Acesso Completo aos Fornecedores Diretos",
      vendedor: "Kiwify Infoproduto",
      categoria: "Negócios & Mídia",
      avaliacao: "4.8",
      vendas: "+6.300 acessos",
      precoOriginal: "",
      precoPromocional: "Consulte a Oferta Atualizada",
      desconto: "Oferta Exclusiva",
      destaque: "Acesso Vitalício",
      imagem: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=500&q=80",
      link: "https://pay.kiwify.com.br/56JaTH2?afid=wgNfefsc",
      tags: ["Direto da Fábrica", "Garantia 7 Dias"]
    },
    {
      titulo: "Acesso Anual VIP - Comunidade & Conteúdos",
      vendedor: "Kiwify Assinatura",
      categoria: "Negócios & Mídia",
      avaliacao: "5.0",
      vendas: "+890 membros",
      precoOriginal: "",
      precoPromocional: "Consulte a Oferta Atualizada",
      desconto: "Plano Anual",
      destaque: "Renovação Anual",
      imagem: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=80",
      link: "https://pay.kiwify.com.br/IGITkPH?afid=ZYcaMNPI",
      tags: ["Comunidade VIP", "Suporte Contínuo"]
    },
    {
      titulo: "Combo E-Book Brownies & Sobremesas Lucrativas",
      vendedor: "Kiwify Receitas",
      categoria: "Gastronomia & Receitas",
      avaliacao: "4.9",
      vendas: "+5.400 vendas",
      precoOriginal: "",
      precoPromocional: "Consulte a Oferta Atualizada",
      desconto: "Guia Completo",
      destaque: "Passo a Passo",
      imagem: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&q=80",
      link: "https://pay.kiwify.com.br/6e4y3Vv?afid=R3Jzvzye",
      tags: ["Renda Extra", "Download Imediato"]
    },
    {
      titulo: "Planner Financeiro Anual Inteligente",
      vendedor: "Kiwify Utilitário",
      categoria: "Desenvolvimento Pessoal",
      avaliacao: "4.8",
      vendas: "+2.900 downloads",
      precoOriginal: "",
      precoPromocional: "Consulte a Oferta Atualizada",
      desconto: "50% OFF",
      destaque: "Organização Pessoal",
      imagem: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=500&q=80",
      link: "https://pay.kiwify.com.br/p7ZGJ94?afid=9pCkyTb4",
      tags: ["Planilha/PDF", "Download Imediato"]
    },
    {
      titulo: "Curso Vivendo de Acessórios & Importação",
      vendedor: "Kiwify Treinamento",
      categoria: "Negócios & Mídia",
      avaliacao: "4.9",
      vendas: "+1.600 alunos",
      precoOriginal: "",
      precoPromocional: "Consulte a Oferta Atualizada",
      desconto: "Treinamento VIP",
      destaque: "Passo a Passo",
      imagem: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=500&q=80",
      link: "https://pay.kiwify.com.br/CqH4vCT?afid=U3rzrJ9g",
      tags: ["Aulas em Vídeo", "Garantia 7 Dias"]
    },
    {
      titulo: "Treinamento Estratégia de Vendas para Afiliados",
      vendedor: "Kiwify Treinamento",
      categoria: "Negócios & Mídia",
      avaliacao: "4.9",
      vendas: "+7.800 alunos",
      precoOriginal: "",
      precoPromocional: "Consulte a Oferta Atualizada",
      desconto: "Starter Afiliado",
      destaque: "Aulas Práticas",
      imagem: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&q=80",
      link: "https://pay.kiwify.com.br/M4zsHTE?afid=6WI0l8OP",
      tags: ["Passo a Passo", "Garantia 7 Dias"]
    },
    {
      titulo: "Método Vendas Rápidas no Instagram",
      vendedor: "Kiwify E-book",
      categoria: "Negócios & Mídia",
      avaliacao: "4.8",
      vendas: "+3.200 leitores",
      precoOriginal: "",
      precoPromocional: "Consulte a Oferta Atualizada",
      desconto: "Estratégia Prática",
      destaque: "Passo a Passo",
      imagem: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=500&q=80",
      link: "https://pay.kiwify.com.br/HTI7ir4?afid=hn4uSoMK",
      tags: ["Vendas no Insta", "Download Imediato"]
    },
    {
      titulo: "Guia Definitivo do Marketing Digital",
      vendedor: "Kiwify Infoproduto",
      categoria: "Negócios & Mídia",
      avaliacao: "4.9",
      vendas: "+5.100 alunos",
      precoOriginal: "",
      precoPromocional: "Consulte a Oferta Atualizada",
      desconto: "Do Zero ao Avançado",
      destaque: "Conteúdo Exclusivo",
      imagem: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=500&q=80",
      link: "https://pay.kiwify.com.br/zTITG5e?afid=jCoaqlbT",
      tags: ["Estratégias 2026", "Acesso Vitalício"]
    }
  ],

  // 3. KIRVANO (16 Produtos - 10 Mantidos Ativos + 6 Novos)
  kirvano: [
    {
      titulo: "Escola das Manicures - Curso Profissional",
      vendedor: "Por JS MONEVO",
      categoria: "Beleza & Estética",
      avaliacao: "4.9",
      vendas: "+4.200 alunas",
      precoOriginal: "",
      precoPromocional: "Consulte a Oferta Atualizada",
      desconto: "Renda Extra",
      destaque: "Certificado Incluso",
      imagem: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=500&q=80",
      link: "https://pay.kirvano.com/r/cc52eab5-19f1-4ab8-bfff-90337b3c1413",
      tags: ["Alongamento de Unhas", "Acesso Imediato"]
    },
    {
      titulo: "Emagrecer Permanente + Aplicativo Auxiliar",
      vendedor: "Por JS Empreendimentos",
      categoria: "Saúde & Fitness",
      avaliacao: "4.9",
      vendas: "+8.900 alunos",
      precoOriginal: "",
      precoPromocional: "Consulte a Oferta Atualizada",
      desconto: "Saúde & Bem-Estar",
      destaque: "Perda de 5 a 7kg em 20 dias",
      imagem: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=500&q=80",
      link: "https://pay.kirvano.com/r/cce71346-07e9-49d5-bd49-572af358b9b8",
      tags: ["Reeducação Alimentar", "App Auxiliar Incluso"]
    },
    {
      titulo: "Nail Designer - Escola de Unhas Profissionais",
      vendedor: "Por JS Empreendimentos",
      categoria: "Beleza & Estética",
      avaliacao: "4.9",
      vendas: "+11.000 alunas",
      precoOriginal: "",
      precoPromocional: "Consulte a Oferta Atualizada",
      desconto: "Promoção Exclusiva",
      destaque: "Fibra de Vidro & Encapsulada",
      imagem: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=500&q=80",
      link: "https://pay.kirvano.com/2035ab79-83c2-4d0b-bb5b-6960d0d98b50?aff=0739e918-73c6-486a-8857-04fc49d134ff",
      tags: ["Manicure & Pedicure", "Acesso Vitalício"]
    },
    {
      titulo: "Desafio Secar em 20 Dias + Aplicativo",
      vendedor: "Por JS LTDA",
      categoria: "Saúde & Fitness",
      avaliacao: "4.9",
      vendas: "+15.000 participantes",
      precoOriginal: "",
      precoPromocional: "Consulte a Oferta Atualizada",
      desconto: "60% OFF",
      destaque: "Cardápio Exclusivo",
      imagem: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=500&q=80",
      link: "https://pay.kirvano.com/722804dd-e67d-459d-aeb8-b22b023df723?aff=f6e7cf13-dc4e-4d73-b558-4f2987a5a003",
      tags: ["Treino & Cardápio", "App Exclusivo"]
    },
    {
      titulo: "Desafio 21 Dias de Pilates na Prática",
      vendedor: "Por Pilates na Prática",
      categoria: "Saúde & Fitness",
      avaliacao: "4.9",
      vendas: "+4.800 alunos",
      precoOriginal: "",
      precoPromocional: "Consulte a Oferta Atualizada",
      desconto: "Saúde & Postura",
      destaque: "Exercícios em Casa",
      imagem: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&q=80",
      link: "https://pay.kirvano.com/r/51a37f2c-d91e-4bc7-b48a-970dcd9e4862",
      tags: ["App Próprio", "Ideal para 30+"]
    },
    {
      titulo: "Árabe do 0 com a Lamis - Somente Conversação",
      vendedor: "Por Lamis Assaad",
      categoria: "Educação & Cursos",
      avaliacao: "5.0",
      vendas: "+750 alunos",
      precoOriginal: "",
      precoPromocional: "Consulte a Oferta Atualizada",
      desconto: "Idiomas",
      destaque: "Foco em Conversação",
      imagem: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=500&q=80",
      link: "https://pay.kirvano.com/r/b8d61d09-c9c6-4f43-a1e4-306fad9dd140",
      tags: ["Árabe Prático", "Aulas Diretas"]
    },
    {
      titulo: "Curso Lash Designer Iniciante - Extensão de Cílios",
      vendedor: "Por Luanda Especialista",
      categoria: "Beleza & Estética",
      avaliacao: "4.9",
      vendas: "+2.700 alunas",
      precoOriginal: "",
      precoPromocional: "Consulte a Oferta Atualizada",
      desconto: "Beleza & Estética",
      destaque: "Com Certificado",
      imagem: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=500&q=80",
      link: "https://pay.kirvano.com/r/52c1b3f7-5bb8-45fb-b310-dca07cc257d8",
      tags: ["Apostila + Vídeo Aulas", "Cílios Perfeitos"]
    },
    {
      titulo: "Biofy.Shop - Transforme a Bio em Vitrine",
      vendedor: "Por Bruno Dantas",
      categoria: "Tecnologia & Gadgets",
      avaliacao: "4.8",
      vendas: "+1.100 usuários",
      precoOriginal: "",
      precoPromocional: "Consulte a Oferta Atualizada",
      desconto: "Ferramenta Digital",
      destaque: "Carrinho com WhatsApp",
      imagem: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=500&q=80",
      link: "https://pay.kirvano.com/r/2c3b081d-1d03-4f15-a7a3-25cac5114f5e",
      tags: ["Vitrine para Instagram", "Integração WhatsApp"]
    },
    {
      titulo: "Nova Profissão - Treinamento de Negócios Online",
      vendedor: "Por Suporte AFILIAGRAM",
      categoria: "Negócios & Mídia",
      avaliacao: "4.9",
      vendas: "+18.000 alunos",
      precoOriginal: "",
      precoPromocional: "Consulte a Oferta Atualizada",
      desconto: "Marketing Digital",
      destaque: "Aulas ao Vivo & Suporte",
      imagem: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=500&q=80",
      link: "https://pay.kirvano.com/r/6cb5e650-d640-401b-8a14-f8cf6fb18cdb",
      tags: ["Empreendedorismo Digital", "Acompanhamento VIP"]
    },
    {
      titulo: "Arte em Biscuit - Modelagem de Porcelana Fria",
      vendedor: "Por Christoffer",
      categoria: "Artesanato & Hobbies",
      avaliacao: "4.8",
      vendas: "+1.200 alunos",
      precoOriginal: "",
      precoPromocional: "Consulte a Oferta Atualizada",
      desconto: "Artesanato & Hobby",
      destaque: "Técnicas de Pintura & Modelagem",
      imagem: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=500&q=80",
      link: "https://pay.kirvano.com/r/4be63625-ada9-4208-8b0d-584b411567a2",
      tags: ["Porcelana Fria", "Ideal para Iniciantes"]
    },
    {
      titulo: "SRT Cinema - Escala de Vídeos no YouTube",
      vendedor: "Por EMERSON FERREIRA DOS SANTOS",
      categoria: "Negócios & Mídia",
      avaliacao: "4.9",
      vendas: "+1.500 licenças",
      precoOriginal: "",
      precoPromocional: "Consulte a Oferta Atualizada",
      desconto: "Escala para YouTube",
      destaque: "Plataforma de Criação",
      imagem: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=500&q=80",
      link: "https://pay.kirvano.com/r/bfd58831-7330-478c-9ede-13f66f61c95e",
      tags: ["Vídeos em Escala", "Suporte Exclusivo"]
    },
    {
      titulo: "Rota Nacional - Fábrica e Fornecedores Dropshipping",
      vendedor: "Por Willian Santos",
      categoria: "Negócios & Mídia",
      avaliacao: "5.0",
      vendas: "+3.800 alunos",
      precoOriginal: "",
      precoPromocional: "Consulte a Oferta Atualizada",
      desconto: "Dropshipping Nacional",
      destaque: "Bônus: Curso Shopee",
      imagem: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=500&q=80",
      link: "https://pay.kirvano.com/r/5c55353e-8434-4e8b-9ae4-f13eaa27c4b5",
      tags: ["Fornecedores Diretos", "Alta Conversão"]
    },
    {
      titulo: "MPD - Método Lucrar com Infoprodutos Low Ticket",
      vendedor: "Por Guilherme Corrêa",
      categoria: "Negócios & Mídia",
      avaliacao: "4.9",
      vendas: "+5.200 alunos",
      precoOriginal: "",
      precoPromocional: "Consulte a Oferta Atualizada",
      desconto: "Baixo Orçamento",
      destaque: "Criativos & Estrutura Validada",
      imagem: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80",
      link: "https://pay.kirvano.com/r/0b628594-798f-4cd8-89fd-a7809706ac0e",
      tags: ["3 Order Bumps", "Suporte WhatsApp"]
    },
    {
      titulo: "Instancia BrutalZap - Automação WhatsApp",
      vendedor: "Por Felipe Eduardo",
      categoria: "Tecnologia & Gadgets",
      avaliacao: "4.8",
      vendas: "+2.100 usuários",
      precoOriginal: "",
      precoPromocional: "Consulte a Oferta Atualizada",
      desconto: "Ferramenta Digital",
      destaque: "Detecção PIX Automática",
      imagem: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=500&q=80",
      link: "https://pay.kirvano.com/r/5fbab68e-20a1-4fb6-b305-15c7f95146ed",
      tags: ["Fluxos Ilimitados", "Webhooks / API"]
    },
    {
      titulo: "E-book +de 50 Geladinhos Gourmet + 3 Bônus",
      vendedor: "Por Receitas de Sabor Lucrativas",
      categoria: "Gastronomia & Receitas",
      avaliacao: "4.9",
      vendas: "+8.400 vendas",
      precoOriginal: "",
      precoPromocional: "Consulte a Oferta Atualizada",
      desconto: "Renda Extra",
      destaque: "50 Receitas Exclusivas",
      imagem: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&q=80",
      link: "https://pay.kirvano.com/r/8f4a3d7b-d074-4752-80ba-83f38749bed2",
      tags: ["Cremosos & Fit", "Download Imediato"]
    },
    {
      titulo: "Alô, Money - Gestão Financeira para Criadores",
      vendedor: "Por Evair Brantes",
      categoria: "Desenvolvimento Pessoal",
      avaliacao: "4.8",
      vendas: "+1.100 usuários",
      precoOriginal: "",
      precoPromocional: "Consulte a Oferta Atualizada",
      desconto: "Gestão Digital",
      destaque: "Para Criadores de Conteúdo",
      imagem: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=500&q=80",
      link: "https://pay.kirvano.com/r/167ea5d8-5271-410f-9da8-c25f6e5cee83",
      tags: ["Controle de Contratos", "Conexão Bancária"]
    }
  ]
};

// =========================================================================
// CRONÔMETRO REGRESSIVO DE OFERTAS
// =========================================================================
function iniciarCronometro() {
  const agora = new Date();
  const meiaNoite = new Date();
  meiaNoite.setHours(24, 0, 0, 0);

  let diferenca = Math.floor((meiaNoite - agora) / 1000);

  setInterval(() => {
    if (diferenca <= 0) diferenca = 86400;
    const horas = Math.floor(diferenca / 3600).toString().padStart(2, '0');
    const minutos = Math.floor((diferenca % 3600) / 60).toString().padStart(2, '0');
    const segundos = Math.floor(diferenca % 60).toString().padStart(2, '0');
    
    const elemento = document.getElementById('cronometro-ofertas');
    if (elemento) elemento.innerText = `${horas}:${minutos}:${segundos}`;
    diferenca--;
  }, 1000);
}

// =========================================================================
// RENDERIZAÇÃO DE BOTÕES DE CATEGORIAS
// =========================================================================
function carregarBotoesCategorias() {
  const container = document.getElementById('container-categorias');
  if (!container) return;
  container.innerHTML = '';

  const produtos = baseProdutos[abaAtual] || [];
  const categoriasUnicas = ['todas', ...new Set(produtos.map(p => p.categoria).filter(Boolean))];

  categoriasUnicas.forEach(cat => {
    const nomeExibicao = cat === 'todas' ? 'Todas as Categorias' : cat;
    const ativo = cat === categoriaAtiva ? 'bg-blue-600 text-white font-bold shadow-md' : 'bg-white text-gray-600 hover:bg-gray-200 border border-gray-200';
    
    const btnHTML = `
      <button onclick="filtrarPorCategoria('${cat}')" 
              class="px-4 py-1.5 rounded-full text-xs transition-all ${ativo}">
        ${nomeExibicao}
      </button>
    `;
    container.innerHTML += btnHTML;
  });
}

// =========================================================================
// RENDERIZAÇÃO DOS CARDS DE PRODUTOS
// =========================================================================
function renderizarProdutos(lista) {
  const grid = document.getElementById('grid-produtos');
  if (!grid) return;
  grid.innerHTML = '';

  if (!lista || lista.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full text-center py-12">
        <i class="fas fa-search text-gray-300 fa-3x mb-3"></i>
        <p class="text-gray-500 font-medium">Nenhum produto encontrado com os filtros selecionados.</p>
      </div>
    `;
    return;
  }

  lista.forEach(item => {
    const cardHTML = `
      <div class="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300">
        <div>
          <div class="relative bg-gray-50 p-6 flex justify-center border-b border-gray-100">
            <img class="h-56 object-contain rounded-lg" src="${item.imagem}" alt="${item.titulo}">
            ${item.desconto ? `<span class="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2.5 py-1 rounded-md shadow">${item.desconto}</span>` : ''}
          </div>
          <div class="p-6">
            <div class="flex items-center justify-between mb-1">
              <span class="text-xs text-blue-600 font-bold uppercase tracking-wide">${item.vendedor}</span>
              ${item.categoria ? `<span class="text-[10px] bg-gray-100 text-gray-500 font-semibold px-2 py-0.5 rounded">${item.categoria}</span>` : ''}
            </div>
            
            <h3 class="font-bold text-lg text-gray-900 mb-1 leading-snug">${item.titulo}</h3>

            <div class="flex items-center space-x-2 my-2 text-xs">
              <div class="flex text-amber-400">
                <i class="fas fa-star"></i>
                <span class="font-bold text-gray-800 ml-1">${item.avaliacao || '4.8'}</span>
              </div>
              <span class="text-gray-300">|</span>
              <span class="text-gray-500 font-medium">${item.vendas || '+1mil vendidos'}</span>
            </div>
            
            <div class="my-4">
              <div class="flex items-baseline space-x-2 mt-0.5">
                <span class="text-base font-extrabold text-blue-600">${item.precoPromocional}</span>
              </div>
              ${item.destaque ? `<span class="inline-block text-xs text-blue-700 font-bold bg-blue-50 px-2 py-0.5 rounded mt-1 border border-blue-200">${item.destaque}</span>` : ''}
              <p class="text-[10px] text-gray-400 mt-1 italic leading-tight">*Preços e condições sujeitos a alterações por parte do fornecedor.</p>
            </div>

            <ul class="text-xs text-gray-600 space-y-1.5 mb-6">
              ${item.tags.map(tag => `<li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i> ${tag}</li>`).join('')}
            </ul>
          </div>
        </div>
        <div class="p-6 pt-0">
          <a href="${item.link}" target="_blank" rel="noopener" 
             class="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-extrabold py-3 px-4 rounded-xl transition-colors duration-200 shadow-md">
            Ver detalhes e preço no site <i class="fas fa-external-link-alt ml-1 text-xs"></i>
          </a>
        </div>
      </div>
    `;
    grid.innerHTML += cardHTML;
  });
}

// =========================================================================
// FILTRAGEM E ABAS
// =========================================================================
function aplicarFiltros() {
  let produtos = baseProdutos[abaAtual] || [];

  if (categoriaAtiva !== 'todas') {
    produtos = produtos.filter(p => p.categoria === categoriaAtiva);
  }

  const inputBusca = document.getElementById('input-busca');
  const termo = inputBusca ? inputBusca.value.toLowerCase().trim() : '';
  if (termo !== '') {
    produtos = produtos.filter(p => 
      p.titulo.toLowerCase().includes(termo) || 
      p.vendedor.toLowerCase().includes(termo) ||
      (p.categoria && p.categoria.toLowerCase().includes(termo))
    );
  }

  renderizarProdutos(produtos);
}

function filtrarPorCategoria(cat) {
  categoriaAtiva = cat;
  carregarBotoesCategorias();
  aplicarFiltros();
}

function filtrarPorBusca() {
  aplicarFiltros();
}

function trocarAba(categoria) {
  abaAtual = categoria;
  categoriaAtiva = 'todas';

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('border-blue-600', 'text-blue-600');
    btn.classList.add('border-transparent', 'text-gray-500');
  });

  const abaAtiva = document.getElementById(`tab-${categoria}`);
  if (abaAtiva) {
    abaAtiva.classList.remove('border-transparent', 'text-gray-500');
    abaAtiva.classList.add('border-blue-600', 'text-blue-600');
  }

  carregarBotoesCategorias();
  aplicarFiltros();
}

// =========================================================================
// CONTROLE DE MODAL
// =========================================================================
function abrirModalContato() {
  const input = document.getElementById('input-pedido-customizado');
  const produto = input ? input.value.trim() : '';

  if (produto === '') {
    alert('Por favor, digite o nome do produto ou curso que você procura!');
    return;
  }

  document.getElementById('modal-produto-nome').innerText = produto;
  document.getElementById('modal-contato').classList.remove('hidden');
}

function fecharModalContato() {
  document.getElementById('modal-contato').classList.add('hidden');
}

// =========================================================================
// VALIDAÇÃO RIGOROSA DE E-MAILS E TELEFONES/DDI
// =========================================================================
function validarEFormatarContato(contatoBruto) {
  const entrada = contatoBruto.trim();

  // 1. Validação de E-mail
  if (entrada.includes('@')) {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    const match = entrada.match(regexEmail);

    if (!match) {
      return { valido: false, mensagem: "Por favor, insira um e-mail válido (exemplo: nome@gmail.com)." };
    }

    const dominio = match[1].toLowerCase();
    const dominiosValidos = [
      'gmail.com', 'outlook.com', 'hotmail.com', 'yahoo.com', 
      'icloud.com', 'uol.com.br', 'bol.com.br', 'terra.com.br', 'live.com'
    ];

    if (!dominiosValidos.includes(dominio)) {
      return { 
        valido: false, 
        mensagem: `O domínio '@${dominio}' não é aceito. Por favor, utilize um e-mail válido (Gmail, Outlook, Hotmail, Yahoo, etc.).` 
      };
    }

    return { valido: true, dadoFormatado: entrada.toLowerCase() };
  } 
  
  // 2. Validação de Telefone / WhatsApp com DDI e DDD
  else {
    let apenasNumeros = entrada.replace(/\D/g, '');

    // Se vier com DDI 55 e tamanho completo (12 ou 13 dígitos), tratamos corretamente
    if (apenasNumeros.startsWith('55') && (apenasNumeros.length === 13 || apenasNumeros.length === 12)) {
      apenasNumeros = apenasNumeros.substring(2);
    }

    // Celular com DDD (11 dígitos, ex: 11999998888) ou Fixo (10 dígitos)
    if (apenasNumeros.length === 11) {
      const ddd = parseInt(apenasNumeros.substring(0, 2), 10);
      const primeiroDigito = apenasNumeros.charAt(2);

      if (ddd < 11 || ddd > 99 || primeiroDigito !== '9') {
        return { 
          valido: false, 
          mensagem: "Número de celular inválido! Certifique-se de incluir o DDD correto e o 9º dígito (ex: 11999998888)." 
        };
      }

      return { valido: true, dadoFormatado: `55${apenasNumeros}` };
    } 
    else if (apenasNumeros.length === 10) {
      return { valido: true, dadoFormatado: `55${apenasNumeros}` };
    } 
    else {
      return { 
        valido: false, 
        mensagem: "Formato de contato inválido! Insira um e-mail válido (ex: seu@gmail.com) ou WhatsApp completo com DDD (ex: 85999998888)." 
      };
    }
  }
}

// =========================================================================
// ENVIO SEGURO PARA O GOOGLE SHEETS
// =========================================================================
function salvarPedidoNoSheets(event) {
  event.preventDefault();

  const produto = document.getElementById('modal-produto-nome').innerText;
  const contatoInput = document.getElementById('input-contato-cliente').value;
  const btn = document.getElementById('btn-salvar-modal');

  const validacao = validarEFormatarContato(contatoInput);

  if (!validacao.valido) {
    alert(validacao.mensagem);
    return;
  }

  btn.disabled = true;
  btn.innerText = "Salvando pedido...";

  const formData = new URLSearchParams();
  formData.append('produto', produto);
  formData.append('plataforma', abaAtual.toUpperCase());
  formData.append('contato', validacao.dadoFormatado);

  fetch(URL_GOOGLE_SHEETS, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: formData.toString()
  })
  .then(() => {
    alert('Pedido registrado com sucesso! Te avisaremos assim que a oferta estiver disponível.');
    document.getElementById('input-pedido-customizado').value = '';
    document.getElementById('input-contato-cliente').value = '';
    fecharModalContato();
  })
  .catch(err => {
    alert('Ocorreu um erro ao registrar seu pedido. Tente novamente.');
  })
  .finally(() => {
    btn.disabled = false;
    btn.innerText = "Cadastrar Pedido";
  });
}

// =========================================================================
// BOTÃO VOLTAR AO TOPO
// =========================================================================
window.onscroll = () => {
  const btn = document.getElementById('btn-topo');
  if (window.scrollY > 300) {
    btn.classList.remove('opacity-0', 'pointer-events-none');
    btn.classList.add('opacity-100');
  } else {
    btn.classList.add('opacity-0', 'pointer-events-none');
    btn.classList.remove('opacity-100');
  }
};

function voltarAoTopo() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// =========================================================================
// INICIALIZAÇÃO DA APLICAÇÃO
// =========================================================================
window.onload = () => {
  trocarAba('mercadolivre');
  iniciarCronometro();
};