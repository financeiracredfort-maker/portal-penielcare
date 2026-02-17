import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacidadeTermos = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="gradient-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-white mb-4">Política de Privacidade e Termos de Uso</h1>
              <p className="text-white/90">Última atualização: Fevereiro de 2026</p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-lg text-muted-foreground">
              
              <h2 className="text-foreground">1. Informações Gerais</h2>
              <p>
                A PENIEL ("nós", "nosso") é uma plataforma de orientação e encaminhamento para tratamento 
                de dependência química e alcoolismo. <strong>A PENIEL não é uma clínica médica, hospital ou 
                unidade de saúde.</strong> Atuamos como intermediários, conectando famílias a clínicas de 
                recuperação credenciadas em todo o Brasil.
              </p>
              <p>
                Este documento descreve como coletamos, usamos e protegemos suas informações pessoais, 
                em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
              </p>

              <h2 className="text-foreground">2. Dados Coletados</h2>
              <p>Podemos coletar os seguintes dados pessoais:</p>
              <ul>
                <li><strong>Dados de identificação:</strong> nome, telefone, cidade</li>
                <li><strong>Dados de contato:</strong> e-mail, WhatsApp</li>
                <li><strong>Dados de navegação:</strong> cookies, endereço IP, páginas visitadas</li>
                <li><strong>Dados fornecidos voluntariamente:</strong> informações sobre a situação familiar compartilhadas em formulários ou conversas</li>
              </ul>

              <h2 className="text-foreground">3. Finalidade do Tratamento de Dados</h2>
              <p>Seus dados são utilizados exclusivamente para:</p>
              <ul>
                <li>Entrar em contato para fornecer orientação e apoio</li>
                <li>Encaminhar para clínicas parceiras adequadas ao perfil</li>
                <li>Melhorar nossos serviços e atendimento</li>
                <li>Cumprir obrigações legais</li>
              </ul>
              <p>
                <strong>Jamais vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros 
                para fins comerciais.</strong>
              </p>

              <h2 className="text-foreground">4. Base Legal (LGPD)</h2>
              <p>
                O tratamento de dados é realizado com base no consentimento do titular (Art. 7º, I da LGPD) 
                e no legítimo interesse (Art. 7º, IX), sempre respeitando os direitos e liberdades fundamentais 
                do titular dos dados.
              </p>

              <h2 className="text-foreground">5. Compartilhamento de Dados</h2>
              <p>
                Seus dados poderão ser compartilhados com clínicas parceiras credenciadas somente 
                mediante seu consentimento prévio e com a finalidade exclusiva de viabilizar o 
                encaminhamento para tratamento.
              </p>

              <h2 className="text-foreground">6. Seus Direitos (LGPD)</h2>
              <p>Conforme a LGPD, você tem direito a:</p>
              <ul>
                <li>Confirmar a existência de tratamento de seus dados</li>
                <li>Acessar seus dados pessoais</li>
                <li>Solicitar correção de dados incompletos ou desatualizados</li>
                <li>Solicitar a eliminação de dados desnecessários</li>
                <li>Revogar o consentimento a qualquer momento</li>
                <li>Solicitar a portabilidade dos dados</li>
              </ul>
              <p>
                Para exercer qualquer desses direitos, entre em contato pelo e-mail: {" "}
                <a href="mailto:contato@peniel.com.br" className="text-primary hover:underline">
                  contato@peniel.com.br
                </a>
              </p>

              <h2 className="text-foreground">7. Cookies e Tecnologias de Rastreamento</h2>
              <p>
                Utilizamos cookies e tecnologias similares (como pixels de rastreamento do Meta e Google) 
                para medir a eficácia de campanhas publicitárias e melhorar a experiência do usuário. 
                Você pode gerenciar suas preferências de cookies nas configurações do seu navegador.
              </p>

              <h2 className="text-foreground">8. Segurança dos Dados</h2>
              <p>
                Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais 
                contra acesso não autorizado, perda, alteração ou destruição. Todas as informações 
                são tratadas com total sigilo e confidencialidade.
              </p>

              <h2 className="text-foreground">9. Retenção de Dados</h2>
              <p>
                Seus dados serão mantidos apenas pelo tempo necessário para cumprir as finalidades 
                descritas nesta política, salvo obrigação legal de retenção.
              </p>

              <h2 className="text-foreground">10. Termos de Uso</h2>
              <h3 className="text-foreground">10.1 Natureza do Serviço</h3>
              <p>
                A PENIEL atua exclusivamente como intermediadora entre famílias e clínicas de 
                recuperação credenciadas. <strong>Não prestamos serviços médicos, psicológicos 
                ou terapêuticos diretamente.</strong> Todas as decisões clínicas e terapêuticas 
                são de responsabilidade das clínicas parceiras e de seus profissionais habilitados.
              </p>

              <h3 className="text-foreground">10.2 Conteúdo Informativo</h3>
              <p>
                O conteúdo deste site é meramente informativo e educacional. <strong>Não substitui 
                consulta, diagnóstico ou tratamento médico profissional.</strong> Sempre consulte 
                um profissional de saúde qualificado para orientações sobre tratamentos.
              </p>

              <h3 className="text-foreground">10.3 Depoimentos</h3>
              <p>
                Os depoimentos publicados neste site são relatos reais de familiares que utilizaram 
                nossos serviços. Os resultados podem variar de pessoa para pessoa e não constituem 
                garantia de resultado.
              </p>

              <h3 className="text-foreground">10.4 Responsabilidade</h3>
              <p>
                A PENIEL não se responsabiliza por decisões tomadas com base exclusivamente nas 
                informações contidas neste site. Recomendamos sempre buscar avaliação profissional 
                presencial antes de tomar qualquer decisão sobre tratamento.
              </p>

              <h2 className="text-foreground">11. Contato do Encarregado de Dados (DPO)</h2>
              <p>
                Para questões relacionadas à proteção de dados pessoais, entre em contato com 
                nosso Encarregado de Dados:
              </p>
              <ul>
                <li><strong>E-mail:</strong> contato@peniel.com.br</li>
                <li><strong>Telefone:</strong> (41) 9577-7142</li>
              </ul>

              <h2 className="text-foreground">12. Alterações nesta Política</h2>
              <p>
                Reservamo-nos o direito de atualizar esta política a qualquer momento. 
                Recomendamos que você revise esta página periodicamente para estar ciente 
                de quaisquer alterações.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacidadeTermos;
