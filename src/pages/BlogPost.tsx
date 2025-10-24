import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Calendar, ArrowLeft, Share2 } from "lucide-react";
import { toast } from "sonner";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-16 text-center">
          <h1 className="mb-4">Post não encontrado</h1>
          <Link to="/blog">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para o blog
            </Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copiado para a área de transferência!");
    }
  };

  // Convert markdown-style content to JSX
  const renderContent = (content: string) => {
    const lines = content.trim().split('\n');
    const elements: JSX.Element[] = [];
    let key = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('## ')) {
        elements.push(<h2 key={key++} className="text-2xl font-semibold mt-8 mb-4">{line.slice(3)}</h2>);
      } else if (line.startsWith('### ')) {
        elements.push(<h3 key={key++} className="text-xl font-semibold mt-6 mb-3">{line.slice(4)}</h3>);
      } else if (line.startsWith('- ') || line.startsWith('* ')) {
        const items: string[] = [line.slice(2)];
        while (i + 1 < lines.length && (lines[i + 1].startsWith('- ') || lines[i + 1].startsWith('* '))) {
          i++;
          items.push(lines[i].slice(2));
        }
        elements.push(
          <ul key={key++} className="list-disc list-inside space-y-2 my-4 text-muted-foreground">
            {items.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        );
      } else if (line.match(/^\d+\./)) {
        const items: string[] = [line.replace(/^\d+\.\s/, '')];
        while (i + 1 < lines.length && lines[i + 1].match(/^\d+\./)) {
          i++;
          items.push(lines[i].replace(/^\d+\.\s/, ''));
        }
        elements.push(
          <ol key={key++} className="list-decimal list-inside space-y-2 my-4 text-muted-foreground">
            {items.map((item, idx) => <li key={idx}>{item}</li>)}
          </ol>
        );
      } else if (line.startsWith('**') && line.endsWith('**')) {
        elements.push(<p key={key++} className="font-semibold mt-4 mb-2">{line.slice(2, -2)}</p>);
      } else if (line.trim() === '') {
        // Skip empty lines
        continue;
      } else {
        elements.push(<p key={key++} className="text-muted-foreground leading-relaxed mb-4">{line}</p>);
      }
    }

    return elements;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="bg-muted py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Início</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-foreground">{post.title}</span>
            </div>
          </div>
        </div>

        {/* Article Header */}
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <Badge variant="secondary">{post.category}</Badge>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </span>
                </div>
              </div>

              <h1 className="mb-6">{post.title}</h1>

              <div className="flex items-center justify-between pb-6 border-b">
                <div>
                  <p className="font-semibold">{post.author}</p>
                  <p className="text-sm text-muted-foreground">{post.authorRole}</p>
                </div>
                
                <Button variant="outline" size="sm" onClick={handleShare}>
                  <Share2 className="h-4 w-4 mr-2" />
                  Compartilhar
                </Button>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              {renderContent(post.content)}
            </div>

            {/* CTA Box */}
            <div className="mt-12 p-8 bg-gradient-subtle rounded-lg border">
              <h3 className="text-xl font-semibold mb-3">Precisa de Ajuda?</h3>
              <p className="text-muted-foreground mb-6">
                Nossa equipe está disponível 24h para oferecer orientação especializada e acolhimento humanizado. Entre em contato agora mesmo.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="default" asChild>
                  <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                    Falar no WhatsApp
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/contato">
                    Solicitar Avaliação Gratuita
                  </Link>
                </Button>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-12 pt-8 border-t">
              <Link to="/blog">
                <Button variant="ghost">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Voltar para o blog
                </Button>
              </Link>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="mb-8">Artigos Relacionados</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts
                .filter(p => p.slug !== slug && p.category === post.category)
                .slice(0, 2)
                .map(relatedPost => (
                  <Link 
                    key={relatedPost.slug} 
                    to={`/blog/${relatedPost.slug}`}
                    className="block group"
                  >
                    <div className="bg-background rounded-lg p-6 border hover:border-primary transition-smooth">
                      <Badge variant="secondary" className="mb-3">{relatedPost.category}</Badge>
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
