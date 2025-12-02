import { motion } from "framer-motion";

interface CommitProps {
    repo: string;
    message: string;
    date: string;
    url: string;
    delay: number;
}

export default function GitHubCommitCard({ repo, message, date, url, delay }: CommitProps) {
    return (
        <motion.a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 0.4, scale: 1, y: 0 }}
            whileHover={{ opacity: 1, scale: 1.05, zIndex: 10 }}
            transition={{ duration: 0.5, delay }}
            className="block p-4 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:bg-card/80 transition-colors w-64 md:w-72 cursor-pointer shadow-sm"
        >
            <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-medium text-muted-foreground truncate">{repo}</span>
            </div>
            <p className="text-sm font-medium text-foreground line-clamp-2 mb-2 h-10">
                {message}
            </p>
            <div className="flex justify-between items-center text-xs text-muted-foreground/80">
                <span>{date}</span>
                <span className="font-mono bg-muted px-1.5 py-0.5 rounded">git commit</span>
            </div>
        </motion.a>
    );
}
